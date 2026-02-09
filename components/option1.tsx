"use client";

import React from "react";

type Factor = {
  title: string;
  desc: string;
  value: number; // 0 → 100 (position du curseur)
  accent: "blue" | "indigo" | "violet";
};

const FACTORS: Factor[] = [
  {
    title: "La méthode de tarification",
    desc: "Au bulletin, à l'heure, à la journée ou au forfait : l'objectif est d'être toujours lisible et prévisible.",
    value: 62,
    accent: "blue",
  },
  {
    title: "La complexité du dossier",
    desc: "Plus il y a d'événements, plus le bulletin demande du contrôle.",
    value: 48,
    accent: "indigo",
  },
  {
    title: "Les services inclus",
    desc: "Logiciel utilisé, entrées/sorties, support ? le prix reflète l'étendue du service.",
    value: 72,
    accent: "violet",
  },
];

function accentStyles(accent: Factor["accent"]) {
  switch (accent) {
    case "blue":
      return {
        track: "from-blue-500/40 via-blue-400/25 to-cyan-300/20",
        knob: "bg-blue-400 ring-blue-200/40",
        dot: "bg-blue-300",
      };
    case "indigo":
      return {
        track: "from-indigo-500/40 via-indigo-400/25 to-pink-300/20",
        knob: "bg-indigo-400 ring-indigo-200/40",
        dot: "bg-indigo-300",
      };
    case "violet":
      return {
        track: "from-violet-500/40 via-violet-400/25 to-sky-300/20",
        knob: "bg-violet-400 ring-violet-200/40",
        dot: "bg-violet-300",
      };
  }
}

export default function Option1() {
  return (
    <section className="mt-12">
     
      <div className="mt-10 grid grid-cols-1 gap-6">
        {FACTORS.map((factor) => {
          const styles = accentStyles(factor.accent);

          return (
            <div
              key={factor.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Texte */}
                <div className="text-left">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${styles.dot}`}
                    />
                    <h3 className="text-lg font-semibold text-white">
                      {factor.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm text-white/75 leading-relaxed">
                    {factor.desc}
                  </p>
                </div>

                {/* Curseur visuel */}
                <div className="w-full sm:w-[360px]">
                  <div className="relative h-10">
                    <div
                      className={`absolute inset-y-1/2 -translate-y-1/2 h-2 w-full rounded-full bg-gradient-to-r ${styles.track}`}
                    />

                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full ${styles.knob} ring-4 shadow`}
                      style={{ left: `calc(${factor.value}% - 10px)` }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-2 flex justify-between text-[11px] font-medium text-white/55">
                    <span>Faible</span>
                    <span className="text-white/70">Impact</span>
                    <span>Fort</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <div className="h-px w-54 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}
