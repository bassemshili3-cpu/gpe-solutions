"use client";

import React from "react";

export default function TarifsGPECard({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="relative w-full max-w-md origin-center scale-[0.9] sm:scale-100">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-[28px] border border-blue-200 bg-white p-5 sm:p-8 shadow-[0_20px_60px_rgba(2,6,23,0.10)]">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-3 top-3 sm:right-4 sm:top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-white/95 text-gray-800 shadow-sm hover:bg-blue-50 active:scale-95"
        >
          ✕
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs sm:text-sm font-semibold text-blue-900">
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
          Le coût d&apos;un bulletin varie selon l&apos;effectif
        </div>

        {/* Tarifs */}
        <div className="mt-6">
          <div className="text-xs sm:text-sm font-semibold text-gray-500">
            Tarif / bulletin
          </div>

          <div className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-3">
            <div className="grid grid-cols-[1fr_auto] gap-3 px-3 pb-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-blue-900/60">
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

                  <span className="inline-flex rounded-lg bg-gradient-to-br from-blue-800/80 to-indigo-400/80 px-2.5 py-1 text-xs sm:text-sm font-bold text-white shadow-sm">
                    {prix}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inclusions */}
        <ul className="mt-6 space-y-2.5 text-[11px] sm:text-sm text-gray-700">
          {[
            "Bulletins de paie conformes",
            "Déclaration sociale nominative (DSN)",
            "Formalités embauche / départ",
            "Support réactif & accompagnement dédié",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
