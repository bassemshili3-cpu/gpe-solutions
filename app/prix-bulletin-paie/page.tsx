//“Prix d’un bulletin de paie” 
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import ContactForm from "@/components/ContactForm";
import ClearHashOnLoad from "@/components/ClearHashOnLoad";

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
    <main className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      <ClearHashOnLoad />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* WRAPPER */}
      <div className="relative overflow-x-hidden overflow-y-visible bg-gradient-to-b from-blue-950 via-blue-950/85 to-blue-50">
        {/* Mesh / aurora global */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/12 blur-3xl" />
          <div className="absolute -top-32 right-0 translate-x-24 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.10),transparent_55%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-white/40" />
        </div>

        {/* HEADEER*/}
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

                    <div className="relative flex h-10 w-10 items-center justify-center -ml-1">
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
                    Prix d’un bulletin de paie
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="relative z-10 py-10 px-6 bg-transparent">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedFadeIn>
              <h1 className="mt-16 text-3xl md:text-4xl font-bold text-white/95">
                Prix d’un bulletin de paie : combien ça coûte, et pourquoi ça varie autant ?
              </h1>
            </AnimatedFadeIn>

            <div className="mt-8 text-center">
              <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <AnimatedFadeIn>
              <p className="mt-8 text-lg md:text-xl text-white/80 leading-[1.7] max-w-3xl mx-auto">
                Le prix d’un bulletin de paie dépend de la méthode de tarification du prestataire,
                du niveau de complexité (convention, variables, multi-contrats, absences, IJSS…),
                et des services inclus (DSN, entrées/sorties, support). Ici, on te donne une vue
                claire et un ordre d’idée.
              </p>
            </AnimatedFadeIn>

            {/* CTA row */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tarifs"
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-700 to-indigo-400 px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-100 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)] active:scale-[0.98]"
              >
                Voir un ordre d’idée
                <span className="transition group-hover:translate-x-0,5">→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-10 py-4 text-base font-semibold text-white/90 shadow-sm backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                Demander un devis personnalisé
              </a>
            </div>

            {/* 3 cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tarification simple",
                  desc: "Au bulletin, ou au forfait : l’objectif est d’être lisible et prévisible.",
                  icon: (
                    <path d="M9 7h6M9 11h6M9 15h4M6 17V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
                  ),
                },
                {
                  title: "Coût lié à la complexité",
                  desc: "Plus il y a d’événements, plus le bulletin demande du contrôle.",
                  icon: <path d="M3 17l6-6 4 4 7-7" />,
                },
                {
                  title: "Services inclus",
                  desc: "DSN, entrées/sorties, support : le prix reflète l’étendue du service.",
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

            <div className="mt-10 flex justify-center">
              <a
                href="#contact"
                className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white"
              >
                Chez GPE Solutions, on répond sous 48h
              </a>
            </div>
          </div>
        </section>

        {/* LINE */}
        <div className="mt-8 flex justify-center">
          <div className="relative h-px w-72">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-2xl" />
          </div>
        </div>

        {/*SECTION: méthodes de tarification*/}
        <section className="relative z-10 pt-10 pb-16 px-6 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <AnimatedFadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                Quelles sont les façons de tarifer un bulletin de paie ?
              </h2>
              <p className="mt-6 text-white/75 text-center max-w-3xl mx-auto leading-relaxed">
                Le prix d’un bulletin de paie dépend surtout du modèle économique : certains
                prestataires facturent “au bulletin”, d’autres proposent un forfait mensuel, ou
                un mix avec des options. L’important : savoir ce qui est inclus.
              </p>
            </AnimatedFadeIn>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Tarif au bulletin",
                  desc: "Simple et lisible : un prix par bulletin produit. Souvent adapté aux TPE/PME.",
                },
                {
                  title: "Forfait mensuel",
                  desc: "Un budget stable : intéressant si tu as un volume régulier et des besoins récurrents.",
                },
                {
                  title: "Au bulletin + options",
                  desc: "Bulletins + prestations ponctuelles (entrées/sorties, attestations, régularisations).",
                },
                {
                  title: "Sur-mesure",
                  desc: "Cas complexes : multi-sites, conventions spécifiques, volumes élevés, particularités métier.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-blue-300/30 bg-blue-950/50 p-8 shadow-xl backdrop-blur-lg"
                

                >
                  <h3 className="text-lg font-bold text-white/95">{card.title}</h3>
                  <p className="mt-3 text-sm text-white/85 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="#tarifs"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
              >
                Voir la grille GPE Solutions
                <span className="transition group-hover:translate-x-0,5">→</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION: facteurs qui font varier le prix */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/75 to-blue-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              Quels facteurs impactent le prix d’un bulletin de paie ?
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              Deux entreprises avec le même effectif peuvent avoir un coût très différent. Le prix
              reflète le temps de traitement, le niveau de contrôle, la complexité, et les outils
              utilisés.
            </p>
          </AnimatedFadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Complexité des bulletins",
                bullets: [
                  "primes variables / commissions",
                  "absences, IJSS, subrogation",
                  "heures supplémentaires, majorations",
                  "multi-contrats / temps partiel",
                ],
              },
              {
                title: "Convention collective / spécificités",
                bullets: [
                  "règles particulières (prévoyance, maintien de salaire)",
                  "accords d’entreprise",
                  "pratiques de paie propres au secteur",
                ],
              },
              {
                title: "Volume & organisation",
                bullets: [
                  "effectif + stabilité",
                  "flux entrées/sorties",
                  "qualité des variables transmises",
                ],
              },
              {
                title: "Logiciel et process",
                bullets: [
                  "outils (ex. Sage) + paramétrage",
                  "contrôles internes",
                  "suivi DSN / retours",
                ],
              },
            ].map((b) => (
              <div key={b.title} className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{b.title}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {b.bullets.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                        ✓
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: grille tarifaire */}
      <section id="tarifs" className="relative overflow-hidden bg-gradient-to-b from-blue-20 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              Grille tarifaire GPE Solutions : un ordre d’idée
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              Pour donner un repère, voici une grille indicative basée sur l’effectif. Chez{" "}
              <span className="font-semibold text-blue-900">GPE Solutions</span>, on privilégie une
              tarification lisible, et on ajuste selon la réalité de tes bulletins (complexité,
              volume, conventions, besoins).
            </p>
          </AnimatedFadeIn>

          <div className="mt-12 flex justify-center">
            <AnimatedFadeIn>
              <div className="relative w-full max-w-md">
                <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-blue-200 bg-white p-8 shadow-[0_20px_60px_rgba(2,6,23,0.10)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(2,6,23,0.14)]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-900">
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
                    Tarif / bulletin (ordre d’idée)
                  </div>

                  <div className="mt-6">
                    <div className="text-sm font-semibold text-gray-500">
                      Selon l’effectif
                    </div>

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
                            <span className="text-sm font-medium text-gray-800">
                              {effectif}
                            </span>

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

                  <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/40 p-4 text-sm text-gray-700">
                    <span className="font-semibold text-blue-900">Note :</span> Le coût réel dépend
                    essentiellement de l'effectif et de la structure de l'entreprise
                  </div>

                  <div className="mt-8 flex justify-center">
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                    >
                      Je souhaite un tarif transparent
                      <span className="transition group-hover:translate-x-0,5">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedFadeIn>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              Questions fréquentes sur le prix d’un bulletin de paie
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              Les réponses ci-dessous t’aident à comparer les offres d’externalisation et à comprendre
              ce que recouvre réellement un “prix par bulletin”.
            </p>
          </AnimatedFadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Pourquoi le prix d’un bulletin de paie varie autant ?",
                a: "Parce que tous les bulletins n’ont pas la même complexité : variables, absences, IJSS, conventions, entrées/sorties… Le prix reflète le temps, le contrôle et les services inclus (DSN, support).",
              },
              {
                q: "Le prix inclut-il toujours la DSN ?",
                a: "Pas forcément. Certains prestataires facturent la DSN séparément ou en option. Chez GPE Solutions, la DSN fait partie du service, avec un process cadré.",
              },
              {
                q: "Forfait ou tarif au bulletin : lequel est le meilleur ?",
                a: "Ça dépend : au bulletin = très lisible ; forfait = budget stable si volume régulier. L’essentiel est de clarifier les options et les cas “hors cadre”.",
              },
              {
                q: "Quels éléments augmenteront le coût ?",
                a: "Les absences/IJSS, les primes variables, les changements fréquents, les conventions spécifiques, et un flux élevé d’entrées/sorties. Un bon process réduit ces surcoûts.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-10 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedFadeIn>
            <h2 className="text-4xl font-bold text-blue-900 mb-2 text-center">
              Formulaire de contact
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Réponse garantie{" "}
              <span className="font-semibold text-blue-900">sous 48 heures</span>.
            </p>
          </AnimatedFadeIn>

          <AnimatedFadeIn>
            <ContactForm />
          </AnimatedFadeIn>
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
  );
}
