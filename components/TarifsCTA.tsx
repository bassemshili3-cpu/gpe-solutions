"use client";

import React, { useEffect, useRef, useState } from "react";
import PartnershipLogos from "@/components/PartnershipLogos";

/** Reveal 3D + expose visible pour staggers */
export function Reveal3D({
  children,
  className = "",
  rootRef,
}: {
  children: (visible: boolean) => React.ReactNode;
  className?: string;
  rootRef?: React.RefObject<HTMLElement | null>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { root: rootRef?.current ?? null, threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootRef]);

  return (
    <div ref={ref} className={className} style={{ perspective: "900px" }}>
      {children(visible)}
    </div>
  );
}

/** Carte tarifs (croix intégrée + compacte mobile) */
function TarifsGPECard({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative w-full max-w-md origin-center scale-[0.80] sm:scale-100">
      <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-blue-200 bg-white p-5 sm:p-8 shadow-[0_20px_60px_rgba(2,6,23,0.10)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-3 top-3 sm:right-4 sm:top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-white/95 text-gray-800 shadow-sm hover:bg-blue-50 active:scale-95"
        >
          ✕
        </button>

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-xs sm:text-xs font-semibold text-blue-900">
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

/** Modal iOS-like + fermeture en cliquant hors de la carte */
function TarifsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);

  const easeIOS = "cubic-bezier(0.16, 1, 0.3, 1)";
  const DURATION = 520;

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setShown(true));
      });
    } else {
      setShown(false);
      const t = setTimeout(() => setMounted(false), DURATION);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[9999]" role="dialog" aria-modal="true">
      {/* Overlay “réel” : on ferme seulement si tu cliques sur le fond (pas sur la carte) */}
      <div
        className="absolute inset-0"
        onMouseDown={(e) => {
          // ✅ ferme uniquement si click sur le fond (et pas sur un enfant)
          if (e.target === e.currentTarget) onClose();
        }}
        onTouchStart={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        style={{
          background: "rgba(0,0,0,0.55)",
          opacity: shown ? 1 : 0,
          transition: `opacity ${DURATION}ms ${easeIOS}`,
        }}
      />

      {/* Card container */}
      <div className="relative z-10 flex min-h-full items-center justify-center p-4">
        <div
          className="will-change-transform"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown
              ? "translateY(0px) scale(1)"
              : "translateY(28px) scale(0.96)",
            filter: shown ? "blur(0px)" : "blur(10px)",
            transition: `transform ${DURATION}ms ${easeIOS}, opacity ${Math.max(
              260,
              DURATION - 140
            )}ms ${easeIOS}, filter ${DURATION}ms ${easeIOS}`,
          }}
        >
          <TarifsGPECard onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

/** Section CTA */
export default function TarifsCTA({
  rootRef,
}: {
  rootRef?: React.RefObject<HTMLElement | null>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10">
      <Reveal3D className="flex justify-center" rootRef={rootRef}>
        {(visible) => <PartnershipLogos visible={visible} />}
      </Reveal3D>

                <h2 className="mt-8 font-manrope text-4xl text-center text-white">
                 L'intérêt de combiner outils paie et analyse de data  
                </h2>

      <p className="mt-13 max-w-4xl mx-auto text-center text-lg leading-relaxed text-white/80">
        Pour faire simple, l’analyse de la donnée en paie permet au gestionnaire de paie de sécuriser et
        fiabiliser les traitements en prenant du recul sur les informations qu’il
        manipule au quotidien. Par exemple, En croisant et en comparant les variables d’un mois à
        l’autre, elle aide à repérer plus facilement les anomalies, les incohérences, ou même les 
        oublis auxquels tout gestionnaire est vulnérable. On peut sécuriser beaucoup de processus
        en analysant de la data: d'un simple contrôle d'heure supplémentaire, aux spécificités les 
        plus poussées d'une convention collective. En résumé, utiliser l'analyse de data pour traiter
        la paye est un levier précieux pour pousser la fiabilité des contrôles de paie au niveau supérieur 
      </p>

      <p className="mt-7 text-white/80 leading-relaxed max-w-4xl mx-auto text-center text-lg">
        On peut sécuriser beaucoup de processus en analysant de la data: d'un simple contrôle 
        d'heure supplémentaire, aux spécificités les plus poussées d'une convention collective.
         En résumé, utiliser l'analyse de data pour traiter la paye est un levier précieux pour 
         pousser la fiabilité des contrôles de paie au niveau supérieur 
      </p>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:brightness-110 active:scale-[0.99] transition"
        >
          Voir nos tarifs
        </button>
      </div>

      <TarifsModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
