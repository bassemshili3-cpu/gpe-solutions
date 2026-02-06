"use client";
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import { useEffect, useRef, useState } from "react";

/** Carte tarifs (croix intégrée + compacte mobile) */
function TarifsGPECard({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="
        relative w-full max-w-md
        origin-center
        scale-[0.80] sm:scale-100
      "
    >
      <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-blue-200 bg-white p-5 sm:p-8 shadow-[0_20px_60px_rgba(2,6,23,0.10)]">
        {/* CROIX inside card */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="
            absolute right-3 top-3 sm:right-4 sm:top-4
            inline-flex h-9 w-9 items-center justify-center
            rounded-full border border-blue-100
            bg-white/95 text-gray-800
            shadow-sm hover:bg-blue-50
            active:scale-95
          "
        >
          ✕
        </button>

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs sm:text-sm font-semibold text-blue-900">
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
          Le coût d&apos;un bulletin varie selon l&apos;effectif
        </div>

        <div className="mt-5 sm:mt-6">
          <div className="text-xs sm:text-sm font-semibold text-gray-500">
            Tarif / bulletin
          </div>

          <div className="mt-4 sm:mt-5 rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-3">
            <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-3 pb-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-blue-900/60">
              <span>Effectif</span>
              <span className="text-right">Prix</span>
            </div>

            <div className="space-y-2">
              {[
                ["1 à 5 salariés", "28 €"],
                ["6 à 15 salariés", "26 €"],
                ["16 à 30 salariés", "23 €"],
                ["31 à 50 salariés", "21 €"],
                ["50+ salariés", "18 €"],
              ].map(([effectif, prix]) => (
                <div
                  key={effectif}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-blue-100 bg-white/80 px-3 py-2 shadow-sm"
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    {effectif}
                  </span>

                  <span className="justify-self-end">
                    <span className="inline-flex items-center rounded-lg bg-gradient-to-br from-blue-800/80 to-indigo-400/80 px-2.5 py-1 text-xs sm:text-sm font-bold text-white shadow-sm">
                      {prix}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 text-[11px] sm:text-sm text-gray-700">
          {[
            "Bulletins de paie conformes",
            "Déclaration sociale nominative (DSN)",
            "Formalités embauche / départ",
            "Support réactif & accompagnement dédié",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                ✓
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ChoisirPrestataireSection() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="-mt-6 text-3xl md:text-3xl font-bold text-blue-800/80 text-center">
          Nos astuces pour choisir le bon prestataire:
        </h2>

        <div className="mt-6 max-w-4xl mx-auto text-center space-y-4">
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous vous recommandons de choisir un prestataire qui apporte un cadre clair, avec idéalement un calendrier de
            collecte/validation, des contrôles systématiques, une DSN conforme, un respect strict confidentialité (La paie implique des données très sensibles) et un interlocuteur réactif quand
            une situation change (arrêt, prime, entrée/sortie etc).
          </p>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">Le choix dépend 
             généralement de votre volume de salariés, du budget, de la complexité 
             sociale et du besoin d’accompagnement au quotidien. Par expérience, un cabinet d'expertise 
             comptable et certains services dédiés proposent généralement une externalisation "premium" dans le sens où ils utilisent
             des logiciels de paie haut de gamme et coûteux, tel que Silae ou encore Sage, qui permettent de traiter de gros volumes de fiches de paies de façon fiable</p>
             
             <p className="mt-8 text-lg text-gray-600 leading-relaxed">En revanche, nous constatons que pour les clients qui ont besoin d'un accompagnement plus important et régulier
             (souvent des TPE/PME), un service d'externalisation dédié à la paie, ou encore un gestionnaire de paie indépendant,
             est une option à privilégier.</p>

          <p className="text-lg text-gray-600 leading-relaxed">
            En sollicitant le service d'externalisation de la paie <strong>GPE Solutions</strong>, vous évitez les zones floues : notre
            process est simple, la production est sécurisée, et nous proposons des tarifs{" "}
            <strong>clairs</strong> et <strong>abordables</strong>. 
            Notre service est premium et inclus l'utilisation du logiciel Sage, uné référence en paie. 
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
            aria-expanded={open}
            aria-controls="gpe-tarifs-modal"
          >
            Voir les tarifs GPE Solutions
            <span className="transition group-hover:translate-x-0,5">→</span>
          </button>
        </div>

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Tarifs GPE Solutions"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

            <div
              id="gpe-tarifs-modal"
              ref={panelRef}
              className="relative w-full max-w-3xl flex items-center justify-center"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <TarifsGPECard onClose={() => setOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
