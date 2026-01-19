"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  /** Texte à “capturer” (doit matcher ce que tu affiches en dessous) */
  text: string;
  /** Taille du texte (en px) utilisée pour générer la texture */
  fontSize?: number;
  /** Font-family utilisée pour générer la texture */
  fontFamily?: string;
  /** Intensité globale du glow */
  intensity?: number; // 0.8–2.0
};

export default function WebGLTitleGlow({
  
  text,
  fontSize = 110,
  fontFamily = 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
  intensity = 1.35,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // --------- 1) Offscreen 2D canvas : on dessine le texte en alpha (texture) ---------
    const off = document.createElement("canvas");
    const offCtx = off.getContext("2d");
    if (!offCtx) return;

    // --------- 2) WebGL context ---------
    const gl =
      (canvas.getContext("webgl2", { premultipliedAlpha: true, antialias: true }) as WebGL2RenderingContext | null) ||
      (canvas.getContext("webgl", { premultipliedAlpha: true, antialias: true }) as WebGLRenderingContext | null);

    if (!gl) {
      // Pas de WebGL => on ne fait rien (le texte HTML reste visible)
      return;
    }

    const isWebGL2 = "createVertexArray" in gl;

    // Resize helper
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(2, Math.floor(rect.width * dpr));
      const h = Math.max(2, Math.floor(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;

      // Offscreen texture : on fait correspondre au canvas
      off.width = w;
      off.height = h;

      // Dessine le texte au centre
      offCtx.clearRect(0, 0, w, h);
      offCtx.save();
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillStyle = "rgba(255,255,255,1)";
      offCtx.font = `900 ${Math.round(fontSize * dpr)}px ${fontFamily}`;
      offCtx.fillText(text, w / 2, h / 2);
      offCtx.restore();

      gl.viewport(0, 0, w, h);
      uploadTextTexture();
    };

    // --------- Shaders (glow premium + aura irrégulière) ---------
    const vert = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main() {
        vUv = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;

    // Un blur “en une passe” (multi-sampling) + modulation organique (noise)
    // et surtout : glow blanc/bleu clair adapté à fond bleu (pas de barre).
    const frag = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uText;
      uniform vec2 uRes;
      uniform float uTime;
      uniform float uIntensity;

      // hash noise
      float hash(vec2 p){
        p = fract(p*vec2(123.34, 345.45));
        p += dot(p, p + 34.345);
        return fract(p.x*p.y);
      }

      float noise(vec2 p){
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f*f*(3.0-2.0*f);
        return mix(a, b, u.x) + (c - a)*u.y*(1.0-u.x) + (d - b)*u.x*u.y;
      }

      void main() {
        vec2 px = 1.0 / uRes;

        // alpha texte (centre)
        float a0 = texture2D(uText, vUv).a;

        // blur approx (anneaux concentriques)
        float a = 0.0;
        a += texture2D(uText, vUv + px*vec2( 1.0, 0.0)).a;
        a += texture2D(uText, vUv + px*vec2(-1.0, 0.0)).a;
        a += texture2D(uText, vUv + px*vec2( 0.0, 1.0)).a;
        a += texture2D(uText, vUv + px*vec2( 0.0,-1.0)).a;

        a += texture2D(uText, vUv + px*vec2( 2.0, 0.0)).a;
        a += texture2D(uText, vUv + px*vec2(-2.0, 0.0)).a;
        a += texture2D(uText, vUv + px*vec2( 0.0, 2.0)).a;
        a += texture2D(uText, vUv + px*vec2( 0.0,-2.0)).a;

        a += texture2D(uText, vUv + px*vec2( 2.0, 2.0)).a;
        a += texture2D(uText, vUv + px*vec2(-2.0, 2.0)).a;
        a += texture2D(uText, vUv + px*vec2( 2.0,-2.0)).a;
        a += texture2D(uText, vUv + px*vec2(-2.0,-2.0)).a;

        a = a / 12.0; // blur moyen

        // halo large (plus doux)
        float b = 0.0;
        b += texture2D(uText, vUv + px*vec2( 6.0, 0.0)).a;
        b += texture2D(uText, vUv + px*vec2(-6.0, 0.0)).a;
        b += texture2D(uText, vUv + px*vec2( 0.0, 6.0)).a;
        b += texture2D(uText, vUv + px*vec2( 0.0,-6.0)).a;
        b = b / 4.0;

        // Aura organique : bruit très subtil qui “respire”
        float n = noise(vUv*vec2(uRes.x/uRes.y, 1.0)*3.2 + uTime*0.15);
        float breathe = 0.78 + 0.22*sin(uTime*1.1 + n*6.2831);

        // Highlight non mécanique : un “glint” doux qui caresse le texte
        float sweep = 0.55 + 0.45*sin(uTime*0.9 + vUv.x*4.0 + n*2.0);
        float glint = smoothstep(0.35, 1.0, sweep);

        // Intensités
        float coreGlow  = smoothstep(0.03, 0.9, a) * 0.85;
        float wideGlow  = smoothstep(0.01, 0.5, b) * 0.65;

        float glow = (coreGlow + wideGlow) * uIntensity * breathe;
        glow *= (0.75 + 0.35*glint);

        // Couleur glow : blanc -> bleu clair (adapté fond bleu)
        vec3 col = vec3(1.0);
        vec3 tint = vec3(0.55, 0.78, 1.0); // bleu clair premium
        col = mix(col, tint, 0.55);

        // Alpha: glow uniquement AUTOUR (pas sur le texte lui-même)
        // On évite que le texte perde son blanc.
        float alpha = clamp(glow * (1.0 - smoothstep(0.30, 1.0, a0)), 0.0, 1.0);

        // Sortie additive douce (glow)
        gl_FragColor = vec4(col, alpha);
      }
    `;

    // --------- Compile helpers ---------
    const compileShader = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) throw new Error("createShader failed");
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        const info = gl.getShaderInfoLog(s) || "shader compile error";
        gl.deleteShader(s);
        throw new Error(info);
      }
      return s;
    };

    const linkProgram = (vsSrc: string, fsSrc: string) => {
      const vs = compileShader(gl.VERTEX_SHADER, vsSrc);
      const fs = compileShader(gl.FRAGMENT_SHADER, fsSrc);
      const p = gl.createProgram();
      if (!p) throw new Error("createProgram failed");
      gl.attachShader(p, vs);
      gl.attachShader(p, fs);
      gl.linkProgram(p);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        const info = gl.getProgramInfoLog(p) || "program link error";
        gl.deleteProgram(p);
        throw new Error(info);
      }
      return p;
    };

    let program: WebGLProgram;
    try {
      program = linkProgram(vert, frag);
    } catch {
      return; // si shader fail, on laisse juste le texte HTML
    }

    gl.useProgram(program);

    // Quad
    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Texture
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const uText = gl.getUniformLocation(program, "uText");
    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uIntensity = gl.getUniformLocation(program, "uIntensity");

    gl.uniform1i(uText, 0);

    const uploadTextTexture = () => {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      // WebGL1/2 compatible
      // @ts-ignore
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, off);
    };

    // Blending: additif doux
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    let raf = 0;
    const start = performance.now();

    const draw = () => {
      const t = (performance.now() - start) / 1000;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform1f(uIntensity, intensity);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(draw);
    };

    // Resize observer (plus fiable qu'un simple window resize)
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      gl.deleteTexture(tex);
      gl.deleteProgram(program);
      gl.deleteBuffer(buf);
    };
  }, [text, fontSize, fontFamily, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
