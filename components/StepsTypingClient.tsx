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
    desc: "Afin de cadrer vos besoins, et vos priorités.",
  },
  {
    n: "3",
    title: "Collecte des informations",
    desc: "Nous organisons la transmission des éléments variables et documents nécessaires.",
  },
  {
    n: "4",
    title: "Production & DSN",
    desc: "Nous préparons Bulletins, contrôles, et la DSN.",
},
  {
    n: "5",
    title: "Validation",
    desc: "Nous vous envoyons vos bulletins de paie pour validation, avant clôture.",
  },
];

export default function StepsTypingClient() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [started, setStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [typedTitle, setTypedTitle] = useState("");

  // Déclenchement au scroll (une seule fois)
  useEffect(() => {
    if (started) return;

    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  // Apparition séquentielle des étapes
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

  // Typing sur le titre de l’étape active
  useEffect(() => {
    if (activeIndex < 0) return;

    const full = STEPS[activeIndex]?.title ?? "";
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
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-6x1 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Les étapes pour externaliser votre paie
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Colonne gauche : étapes */}
          <div className="space-y-4">
            {STEPS.map((s, idx) => {
              const reached = idx <= activeIndex;
              const current = idx === activeIndex;

              return (
                <div
                  key={s.n}
                  className={[
                    "relative rounded-3xl border p-6 transition",
                    reached ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                    current
                      ? "border-blue-200 bg-blue-50/60 shadow-sm"
                      : "border-slate-200 bg-white",
                  ].join(" ")}
                  style={{
                    transitionDuration: "550ms",
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* barre verticale */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200" />

                  <div className="flex items-start gap-4">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-indigo-700 text-white font-bold">
                      {s.n}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {current ? (
                          <>
                            {typedTitle}
                            <span className="ml-0.5 inline-block h-4 w-0.5 align-[-2px] bg-blue-700/70 animate-caret" />
                          </>
                        ) : (
                          s.title
                        )}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Colonne droite : carte “résumé” */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl" />
            <div className="relative rounded-[32px] border border-blue-100 bg-gradient-to-b from-white to-blue-50 p-10 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-semibold text-blue-900">
                Process maîtrisé
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Une paie fiable et sans stress
              </h3>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="text-xs font-semibold text-blue-900">Contrôles</div>
                  <div className="mt-1 text-sm text-gray-700">Vérifications systématiques</div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="text-xs font-semibold text-blue-900">Conformité</div>
                  <div className="mt-1 text-sm text-gray-700">DSN & obligations sociales</div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="text-xs font-semibold text-blue-900">Confidentialité</div>
                  <div className="mt-1 text-sm text-gray-700">Traitement strict des données</div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="text-xs font-semibold text-blue-900">Suivi</div>
                  <div className="mt-1 text-sm text-gray-700">Un interlocuteur dédié</div>
                </div>
              </div>

              {/* CTA */}
            
              


              <p className="mt-3 text-center text-xs text-gray-500">
                Réponse sous 24h • Sans engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
