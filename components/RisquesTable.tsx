"use client";

import { useMemo, useState } from "react";

/* =========================
   Types
========================= */
type Row = {
  categorie: string;
  risque: string;
  impact: string;
  prevenuPar: string;
};

type SortKey = keyof Row;
type SortDir = "asc" | "desc";

/* =========================
   Component
========================= */
export default function RisquesTable() {
  /* --- Données --- */
  const rows = useMemo<Row[]>(
    () => [
      {
        categorie: "Paie",
        risque: "Erreurs de variables (heures, absences, primes)",
        impact: "Régularisations, tensions salariés",
        prevenuPar: "Contrôles, cohérences, pièces manquantes",
      },
      {
        categorie: "Conformité",
        risque: "Paramétrage non à jour (taux, plafonds, règles)",
        impact: "Non-conformité, écarts de cotisations",
        prevenuPar: "Veille sociale et mises à jour continues",
      },
      {
        categorie: "DSN",
        risque: "DSN incohérente ou rejetée",
        impact: "Blocage dépôt, pénalités, relances",
        prevenuPar: "Contrôles DSN avant transmission",
      },
      {
        categorie: "Échéances",
        risque: "Retards ou oublis d’échéances sociales",
        impact: "Stress, retards, surcoûts",
        prevenuPar: "Calendrier et process mensuel cadré",
      },
      {
        categorie: "Entrées / sorties",
        risque: "Départs ou embauches mal cadrés",
        impact: "Litiges, documents manquants",
        prevenuPar: "Checklists et production sécurisée",
      },
      {
        categorie: "Données",
        risque: "Manque de traçabilité et d’historique",
        impact: "Erreurs répétées, perte d’informations",
        prevenuPar: "Archivage et suivi des validations",
      },
      {
        categorie: "Continuité",
        risque: "Rupture de service (absence, surcharge)",
        impact: "Paie en retard, gestion en urgence",
        prevenuPar: "Organisation dédiée et continuité assurée",
      },
    ],
    []
  );

  /* --- États --- */
  const [query, setQuery] = useState("");
  const [categorie, setCategorie] = useState("Toutes");
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir }>({
    key: "categorie",
    dir: "asc",
  });

  /* --- Catégories --- */
  const categories = useMemo<string[]>(() => {
    const set = new Set(rows.map((r) => r.categorie));
    return ["Toutes", ...Array.from(set)];
  }, [rows]);

  /* --- Filtrage + tri --- */
  const filteredRows = useMemo<Row[]>(() => {
    const q = query.trim().toLowerCase();

    return rows
      .filter((r) => (categorie === "Toutes" ? true : r.categorie === categorie))
      .filter((r) => {
        if (!q) return true;
        const blob = `${r.categorie} ${r.risque} ${r.impact} ${r.prevenuPar}`.toLowerCase();
        return blob.includes(q);
      })
      .sort((a, b) => {
        const aVal = String(a[sort.key]);
        const bVal = String(b[sort.key]);
        const res = aVal.localeCompare(bVal, "fr", { sensitivity: "base" });
        return sort.dir === "asc" ? res : -res;
      });
  }, [rows, query, categorie, sort]);

  /* --- Helpers --- */
  const toggleSort = (key: SortKey) => {
    setSort((prev) =>
      prev.key === key
        ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" }
    );
  };

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sort.key !== col) return <span className="text-gray-300">↕</span>;
    return <span className="text-blue-700">{sort.dir === "asc" ? "↑" : "↓"}</span>;
  };

  /* =========================
     Render
  ========================= */
  return (
    <div className="mt-12">
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <label className="text-sm font-semibold text-gray-700">
            Catégorie
            <select
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="mt-1 sm:mt-0 sm:ml-3 rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-blue-200"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <span className="text-sm text-gray-500">
            <strong className="text-gray-800">{filteredRows.length}</strong>{" "}
            risque{filteredRows.length > 1 ? "s" : ""}
          </span>
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Rechercher (ex : "DSN", "primes", "attestations")'
          className="w-full md:w-[420px] rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-blue-100 bg-white shadow-sm">
        <table className="min-w-[980px] w-full text-left">
          <thead className="bg-blue-50/70">
            <tr className="text-xs uppercase tracking-wide text-gray-600">
              {[
                ["categorie", "Catégorie"],
                ["risque", "Risque évité"],
                ["impact", "Impact"],
                ["prevenuPar", "Apport de l’externalisation"],
              ].map(([key, label]) => (
                <th key={key} className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => toggleSort(key as SortKey)}
                    className="inline-flex items-center gap-2 font-bold text-gray-700 hover:text-blue-800"
                  >
                    {label} <SortIcon col={key as SortKey} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-blue-100">
            {filteredRows.map((r, i) => (
              <tr key={i} className="hover:bg-blue-50/40">
                <td className="px-5 py-4">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
                    {r.categorie}
                  </span>
                </td>
                <td className="px-5 py-4 font-medium text-gray-900">{r.risque}</td>
                <td className="px-5 py-4 text-sm text-gray-700">{r.impact}</td>
                <td className="px-5 py-4 text-sm text-gray-700">{r.prevenuPar}</td>
              </tr>
            ))}

            {filteredRows.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-sm text-gray-600">
                  Aucun résultat.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-gray-500 text-center">
        Astuce : cliquez sur les en-têtes pour trier le tableau.
      </p>
    </div>
  );
}
