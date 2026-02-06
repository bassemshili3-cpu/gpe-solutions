// “Prix d’un bulletin de paie”
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import ContactForm from "@/components/ContactForm";
import ClearHashOnLoad from "@/components/ClearHashOnLoad";
import Head from "next/head";

export default function PrixBulletinDePaiePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GPE Solutions",
    url: "https://gpe-solutions.fr/prix-bulletin-de-paie",
    description:
      "Prix d’un bulletin de paie : comprendre les modes de tarification, les facteurs qui font varier le coût, et obtenir un ordre d’idée grâce à une grille tarifaire. Externalisation de la paie & DSN.",
    areaServed: "FR",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@gpe-solutions.fr",
    },
    serviceType: ["Externalisation de la paie", "Bulletins de paie", "DSN"],
  };

  const pricing = [
    ["1 à 5 salariés", "28 €"],
    ["6 à 15 salariés", "26 €"],
    ["16 à 30 salariés", "23 €"],
    ["31 à 50 salariés", "21 €"],
    ["50+ salariés", "18 €"],
  ];

  return (
    <>
      <Head>
        <title>Bulletin de paie : tout savoir sur les prix | GPE Solutions</title>

        <meta
          name="description"
          content="Prix d’un bulletin de paie : comprendre les modes de tarification, les facteurs qui font varier le coût, et obtenir un ordre d’idée grâce à notre grille tarifaire. Externalisation de la paie & DSN."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
        <ClearHashOnLoad />

        {/* WRAPPER */}
       
        <div className="relative overflow-x-hidden overflow-y-visible bg-gradient-to-b from-blue-950 via-blue-950/90 to-white">

       

          {/* Mesh / aurora global */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/12 blur-3xl" />
            <div className="absolute -top-32 right-0 translate-x-24 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.10),transparent_55%)]" />
          </div>

          {/* HEADER */}
          <header className="relative">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="relative z-10 w-full px-3 pt-3 pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="leading-tight">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-extrabold tracking-tight text-blue-300">
                        GPE
                      </span>
                      <span className="text-2xl font-extrabold tracking-tight text-white/95">
                        Solutions
                      </span>

                      <div className="relative flex h-10 w-10 items-center justify-center">
                        <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-violet-500/20 blur-2xl" />
                        <img
                          src="/icon.png"
                          alt="GPE Solutions"
                          className="mt-4 relative h-10 w-10 object-contain"
                          draggable={false}
                        />
                      </div>
                    </div>

                    <div className="text-[14px] font-medium text-white/55 -mt-2">
                      Gestion Paie Externalisée
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </header>
          

          {/* HERO */}
          <section className="relative z-10 py-10 px-6 bg-transparent">
            <div className="relative max-w-5xl mx-auto text-center">
              {/* === SYMBOLS € DISCRETS (SEO-FRIENDLY) === */}
<div className="pointer-events-none absolute inset-0">
  
  {/* Desktop only */}
  <span
    className="hidden sm:block absolute top-16 left-12 text-white/10 text-2xl
    motion-safe:animate-[floatMicro_12s_ease-in-out_infinite]"
  >
    €
  </span>

  <span
    className="hidden sm:block absolute top-45 right-10 text-white/10 text-3xl
    motion-safe:animate-[floatMicro_15s_ease-in-out_infinite]"
    style={{ animationDelay: "1.5s" }}
  >
    €
  </span>

  {/* Mobile only – 1 symbole max */}
  <span
    className="sm:hidden absolute top-10 left-1/2 -translate-x-1/2 text-white/10 text-xl
    motion-safe:animate-[floatMicro_14s_ease-in-out_infinite]"
  >
    €
  </span>

</div>
{/* === FIN SYMBOLS === */}

              {/* === FIN SYMBOLS === */}

              <AnimatedFadeIn>
                <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white/95 relative">
                  Prix d’un bulletin de paie : combien ça coûte, et pourquoi ça varie autant ?
                </h1>
              </AnimatedFadeIn>

              <div className="mt-8 text-center">
                <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <AnimatedFadeIn>
                <p className="mt-12 text-lg md:text-xl text-white/80 leading-[1.7] max-w-3xl mx-auto relative">
                  Le prix d’un bulletin de paie dépend de la méthode de tarification du prestataire,
                  du niveau de complexité (convention, variables, multi-contrats, absences, IJSS…),
                  et des services inclus (DSN, entrées/sorties, support). Ici, on vous donne une vue
                  claire ainsi que les tarifs de notre propre service d'externalisation.
                </p>
              </AnimatedFadeIn>

              <div className="relative z-10 mt-20 mb-10 text-center">
                <p className="text-white/70 text-base md:text-lg italic">
                  Concrètement, le prix d’un bulletin de paie repose sur trois leviers clés:
                </p>

                <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* 3 cards */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "La méthode de tarification",
                    desc: "Au bulletin, à l'heure, à la journée ou au forfait : l’objectif est d’être toujours lisible et prévisible.",
                    icon: (
                      <path d="M9 7h6M9 11h6M9 15h4M6 17V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
                    ),
                  },
                  {
                    title: "La complexité du dossier",
                    desc: "Plus il y a d’événements, plus le bulletin demande du contrôle.",
                    icon: <path d="M3 17l6-6 4 4 7-7" />,
                  },
                  {
                    title: "Les services inclus",
                    desc: "Logiciel utilisé, entrées/sorties, support ? le prix reflète l’étendue du service.",
                    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-sm backdrop-blur transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-white/20"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:scale-[1.03]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        {card.icon}
                      </svg>
                    </div>
                    <h2 className="mt-6 text-lg font-semibold text-white/95">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/75">{card.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="#contact"
                  className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white"
                >
                  Externalisez votre paie avec GPE Solutions
                </a>
              </div>
            </div>
          </section>

          {/* LINE */}
          <div className="flex justify-center">
            <div className="relative h-px w-72">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-2xl" />
            </div>
          </div>

          {/* ================= COÛT MOYEN D’UNE FICHE DE PAIE ================= */}
          <section className="relative z-10 py-24 px-6 bg-transparent">
            <div className="max-w-5xl mx-auto">
              <h2 className="-mt-20 text-3xl md:text-4xl font-bold text-white text-center">
                En 2026, une fiche de paie coûte en moyenne:
              </h2>

              {/* TABLE */}
              <div className="mt-14 overflow-x-auto">
                <table className="w-full border-collapse border-2 border-white/40 bg-transparent">
                  <thead>
                    <tr className="border-b-2 border-white/30">
                      <th className="px-6 py-4 text-center text-[12px] uppercase tracking-wide font-semibold text-white/90 border-r border-white/30">
                        <strong>Mode de tarification</strong>
                      </th>
                      <th className="px-6 py-4 text-center text-[12px] uppercase tracking-wide font-semibold text-white/90 border-r border-white/30">
                        <strong>Coût moyen observé</strong>
                      </th>
                      <th className="px-6 py-4 text-center text-[12px] uppercase tracking-wide font-semibold text-white/90">
                        <strong>À quoi cela correspond</strong>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-white/15">
                      <td className="px-6 py-4 font-medium text-white border-r border-white/20">
                        Tarif au bulletin (dossier simple)
                      </td>
                      <td className="px-6 py-4 text-white/90 border-r border-white/20">
                        20 € à 35 € / bulletin
                      </td>
                      <td className="px-6 py-4 text-white/70 text-sm">
                        Bulletin standard, peu de variables, convention simple.
                      </td>
                    </tr>

                    <tr className="border-b border-white/15 bg-white/[0.03]">
                      <td className="px-6 py-4 font-medium text-white border-r border-white/20">
                        Tarif au bulletin (dossier complexe)
                      </td>
                      <td className="px-6 py-4 text-white/90 border-r border-white/20">
                        35 € à 60 € / bulletin
                      </td>
                      <td className="px-6 py-4 text-white/70 text-sm">
                        Variables multiples, absences complexes, IJSS, régularisations,
                        conventions spécifiques.
                      </td>
                    </tr>

                    <tr className="border-b border-white/15">
                      <td className="px-6 py-4 font-medium text-white border-r border-white/20">
                        Facturation horaire
                      </td>
                      <td className="px-6 py-4 text-white/90 border-r border-white/20">
                        60 € à 100 € / heure
                      </td>
                      <td className="px-6 py-4 text-white/70 text-sm">
                        Interventions ponctuelles, conseil social, corrections ou reprises
                        de dossiers.
                      </td>
                    </tr>

                    <tr className="bg-white/[0.03]">
                      <td className="px-6 py-4 font-medium text-white border-r border-white/20">
                        Facturation à la journée
                      </td>
                      <td className="px-6 py-4 text-white/90 border-r border-white/20">
                        400 € à 800 € / jour
                      </td>
                      <td className="px-6 py-4 text-white/70 text-sm">
                        Missions spécifiques : audit paie, structuration, reprise complète
                        ou accompagnement projet.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-10 text-sl text-white/85 leading-relaxed max-w-3xl mx-auto text-center">
                Ces estimations s’appuient sur les pratiques observées chez les prestataires
                de paie, cabinets comptables et acteurs du conseil social, ainsi que sur
                les repères diffusés par des organismes de référence (URSSAF, syndicats
                professionnels du chiffre)
              </p>
              <p className="mt-10 text-sl text-white/85 leading-relaxed max-w-3xl mx-auto text-center">
                À noter que dans la pratique, les tarifications les plus courantes sont celles au
                bulletin et à la journée.
              </p>
              <p className="mt-20 text-white/85 text-lg leading-relaxed">
                Nous vous proposons maintenant de découvrir notre approche chez{" "}
                <span className="font-semibold text-white">GPE Solutions</span> : une paie avec un
                logiciel reconnu et avec une tarification{" "}
                <span className="font-semibold text-white">simple</span> et{" "}
                <span className="font-semibold text-white"> accessible</span>
              </p>
            </div>
          </section>

          {/* ================= TRANSITION VERS LA GRILLE (PUNCHY) ================= */}
          <section className="relative z-10 px-6 pb-10">
            <div className="max-w-5xl mx-auto">
              <div className="-mt-10 border-l-2 border-white/30 pl-6">
                <div className="text-xs uppercase tracking-widest text-white/60">
                  La formule GPE
                </div>

                <p className="mt-4 text-white text-xl md:text-xl font-semibold leading-snug">
                  Expertise + Logiciel premium + tarif simple = une paie de qualité et sans
                  surprise
                </p>

                {/* Logo Sage (iconic) */}
                <div className="mt-8 flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="pointer-events-none absolute -inset-6 rounded-none bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl animate-pulse" />
                    <div className="absolute -inset-[4px] rounded-none bg-gradient-to-br from-blue-900 via-white to-violet-900 opacity-70 blur-[0.5px]" />

                    <div className="group relative flex h-20 w-38 items-center justify-center rounded-none">
                      <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute -left-10 top-1/2 h-14 w-14 -translate-y-1/2 rotate-12 bg-white/30 blur-xl" />
                      </div>

                      <img
                        src="/Sage_logo.png"
                        alt="Sage"
                        className="h-50 w-38 w-auto object-contain"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-white/80 leading-relaxed">
                  Chez GPE Solutions, nous travaillons sur{" "}
                  <span className="font-semibold text-white">Sage </span>
                  et nous avons opté pour une tarification abordable et lisible, c'est-à-dire
                  que le prix varie donc uniquement selon l’effectif.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: grille tarifaire */}
          <div className="max-w-6xl mx-auto px-6 py-16">
            <AnimatedFadeIn>
              <h2 className="-mt-5 text-3xl md:text-4xl font-bold text-white text-center">
                La Grille tarifaire <br />
                <span className="text-4xl font-extrabold tracking-tight text-blue-300">
                  GPE
                </span>{" "}
                <span className="text-4xl font-extrabold tracking-tight text-white/95">
                  Solutions
                </span>
              </h2>
            </AnimatedFadeIn>

            <div className="mt-12 flex justify-center">
              <AnimatedFadeIn>
                <div className="relative w-full max-w-md">
                  <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl" />

                  <div className="relative overflow-hidden rounded-[32px] border border-blue-200 bg-white p-8 shadow-[0_20px_60px_rgba(2,6,23,0.10)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(2,6,23,0.14)]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-900">
                      <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
                      Tarif / bulletin
                    </div>

                    <div className="mt-6">
                      <div className="text-sm font-semibold text-gray-500">Selon l’effectif</div>

                      <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-3">
                        <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-3 pb-2 text-[11px] font-semibold uppercase tracking-wide text-blue-700/60">
                          <span>Effectif</span>
                          <span className="text-right">Prix</span>
                        </div>

                        <div className="space-y-2">
                          {pricing.map(([effectif, prix]) => (
                            <div
                              key={effectif}
                              className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-blue-100 bg-white/80 px-3 py-2.5 shadow-sm"
                            >
                              <span className="text-sm font-medium text-gray-800">{effectif}</span>

                              <span className="justify-self-end">
                                <span className="inline-flex items-center rounded-lg bg-gradient-to-br from-blue-800 to-indigo-400 px-2.5 py-1 text-sm font-bold text-white shadow-sm">
                                  {prix}
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <ul className="mt-8 space-y-3 text-sm text-gray-700">
                      {[
                        "Bulletins conformes & contrôlés",
                        "Déclaration Sociale Nominative (DSN)",
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

                    <div className="mt-8 flex justify-center">
                      <a
                        href="#contact"
                        className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                      >
                        Je souhaite externaliser ma paie
                        <span className="transition group-hover:translate-x-0,5">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedFadeIn>
            </div>
          </div>

          {/* ✅ IMPORTANT : on ferme le wrapper ICI, après la section coûts moyens */}
        </div>

 {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-10 px-6 bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <AnimatedFadeIn>
            <h2 className="text-4xl font-bold text-blue-900 mb-2 text-center">
              Formulaire de contact
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Réponse garantie{" "}
              <span className="font-semibold text-blue-900">sous 48 heures</span>
              .
            </p>
          </AnimatedFadeIn>

          <AnimatedFadeIn>
            <ContactForm />
          </AnimatedFadeIn>
        </div>
      </section>

        {/* SECTION: FAQ */}
<section className="-mt-10 py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <AnimatedFadeIn>
      <div className="text-center">
        <h2 className="inline-block rounded-full bg-blue-900 px-8 py-3 text-2xl md:text-3xl font-bold tracking-wide text-white shadow-sm">
          FAQ
        </h2>
      </div>
    </AnimatedFadeIn>

    {/* LIST */}
    <div className="mt-16 space-y-4">
      {[
        {
          q: "Quel est le délai moyen pour mettre en place une externalisation de la paie ?",
          a: "En pratique, tout dépend du nombre de salariés, des accès et des éléments à reprendre (contrats, profils, organismes, paramétrages). Pour une petite structure, la mise en place peut être rapide dès lors que les informations de base sont disponibles.",
        },
        {
          q: "Le prix inclut-il toujours la DSN ?",
          a: "Pas forcément. Certains prestataires facturent la DSN séparément ou en option. Chez GPE Solutions, la DSN fait partie du service, avec un process cadré.",
        },
        {
          q: "Qu’est-ce qui est généralement inclus (ou non) dans un “prix par bulletin” ?",
          a: "Selon les prestataires, le prix peut inclure uniquement l’édition du bulletin, ou intégrer aussi la DSN, les entrées/sorties, le support et certaines formalités. Le plus important est de clarifier le périmètre (inclus vs. hors forfait) avant de comparer.",
        },
        {
          q: "Quels documents faut-il fournir pour démarrer avec un prestataire paie ?",
          a: "Généralement : informations entreprise (SIRET, convention), contrats et profils salariés, éléments variables, paramétrages existants, et derniers bulletins/DSN si reprise. Plus ces éléments sont complets, plus la mise en route est fluide.",
        },
      ].map((item) => (
        <details
          key={item.q}
          className="group relative overflow-hidden rounded-xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md group-open:from-blue-100 group-open:to-white"
        >
          {/* Question */}
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5">
            <span className="text-lg font-semibold text-blue-950">{item.q}</span>

            {/* Icône animée */}
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-blue-100/70">
              <span className="absolute h-0.5 w-4 bg-blue-900 transition-all duration-300 group-open:rotate-180" />
              <span className="absolute h-4 w-0.5 bg-blue-900 transition-all duration-300 group-open:opacity-0" />
            </span>
          </summary>

          {/* Réponse */}
          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>


        {/* FOOTER */}
        <footer className="py-10 px-6 border-t border-blue-100 bg-white">
          <div className="max-w-6xl mx-auto text-center text-xs text-gray-500">
            <div>© 2026 GPE Solutions. Tous droits réservés.</div>

            <div className="mt-3 flex items-center justify-center gap-3">
              <a
                href="/politique-de-confidentialite"
                className="text-blue-900 hover:text-blue-700 underline underline-offset-4"
              >
                Politique de confidentialité
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/mentions-legales"
                className="text-blue-900 hover:text-blue-700 underline underline-offset-4"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
