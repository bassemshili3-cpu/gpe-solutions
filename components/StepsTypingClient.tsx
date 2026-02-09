"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  n: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    n: "1",
    title: "Vous remplissez le formulaire",
    desc: "Nous prenons connaissance de votre situation.",
  },
  {
    n: "2",
    title: "On vous répond",
    desc: "Afin de cadrer vos besoins et vos priorités.",
  },
  {
    n: "3",
    title: "Collecte des informations",
    desc: "Nous organisons la transmission des éléments variables et documents nécessaires.",
  },
  {
    n: "4",
    title: "Production & DSN",
    desc: "Nous préparons les bulletins, les contrôles et la DSN.",
  },
  {
    n: "5",
    title: "Validation",
    desc: "Nous vous envoyons les bulletins pour validation avant clôture.",
  },
];

export default function StepsTypingClient() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [started, setStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [typedTitle, setTypedTitle] = useState("");

  /* Déclenchement au scroll (une seule fois) */
  useEffect(() => {
    if (started) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  /* Apparition séquentielle */
  useEffect(() => {
    if (!started) return;

    let i = 0;
    setActiveIndex(0);

    const timer = setInterval(() => {
      i += 1;
      if (i >= STEPS.length) {
        clearInterval(timer);
        return;
      }
      setActiveIndex(i);
    }, 520);

    return () => clearInterval(timer);
  }, [started]);

  /* Typing sur le titre actif */
  useEffect(() => {
    if (activeIndex < 0) return;

    const full = STEPS[activeIndex].title;
    setTypedTitle("");

    let j = 0;
    const t = setInterval(() => {
      j += 1;
      setTypedTitle(full.slice(0, j));
      if (j >= full.length) clearInterval(t);
    }, 18);

    return () => clearInterval(t);
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="relative px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <h2 className="-mt-20 text-3xl md:text-4xl font-bold text-white text-center">
          Les étapes pour externaliser votre paie
        </h2>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche : étapes */}
          <div className="space-y-4">
            {STEPS.map((s, idx) => {
              const reached = idx <= activeIndex;
              const current = idx === activeIndex;

              return (
                <div
                  key={s.n}
                  className={[
                    "relative rounded-3xl border p-6 transition-all",
                    reached
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4",
                    current
                      ? "border-white/40 bg-white/15 backdrop-blur shadow-lg"
                      : "border-white/20 bg-white/10 backdrop-blur-sm",
                  ].join(" ")}
                  style={{
                    transitionDuration: "1200ms",
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/70 to-indigo-700/70 text-white font-bold">
                      {s.n}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-white">
                        {current ? (
                          <>
                            {typedTitle}
                            <span className="ml-0.5 inline-block h-4 w-0.5 bg-white/70 animate-pulse" />
                          </>
                        ) : (
                          s.title
                        )}
                      </h3>

                      <p className="mt-2 text-sm text-white/80 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Colonne droite : carte résumé */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent blur-3xl" />

            <div className="relative rounded-[32px] border border-white/30 bg-white/15 backdrop-blur-xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <div className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                Process maîtrisé
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Une paie fiable et sans stress
              </h3>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Contrôles", "Vérifications systématiques"],
                  ["Conformité", "DSN & obligations sociales"],
                  ["Confidentialité", "Traitement strict des données"],
                  ["Suivi", "Un interlocuteur dédié"],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/30 bg-white/10 p-4"
                  >
                    <div className="text-xs font-semibold text-white">
                      {title}
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      {desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
