// “Externaliser la paie” 
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import ContactForm from "@/components/ContactForm";
import ClearHashOnLoad from "@/components/ClearHashOnLoad";

export default function ExternaliserLaPaiePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GPE Solutions",
    url: "https://gpe-solutions.fr/externaliser-la-paie",
    description:
      "Externaliser la paie : comprendre les avantages, les étapes, les risques évités et comment choisir un prestataire. Service d’externalisation de la paie & DSN.",
    areaServed: "FR",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@gpe-solutions.fr",
    },
    serviceType: ["Externalisation de la paie", "DSN", "Gestion sociale"],
  };

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
                    Externaliser la paie
                  </div>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-700 to-indigo-400 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                >
                  Obtenir un devis
                  <span className="transition group-hover:translate-x-0,5">→</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="relative z-10 py-10 px-6 bg-transparent">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedFadeIn>
              <h1 className="mt-16 text-3xl md:text-4xl font-bold text-white/95">
                Externaliser la paie : le guide clair pour gagner du temps, sécuriser
                vos bulletins et rester conforme
              </h1>
            </AnimatedFadeIn>

            <div className="mt-8 text-center">
              <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <AnimatedFadeIn>
              <p className="mt-8 text-lg md:text-xl text-white/80 leading-[1.7] max-w-3xl mx-auto">
                Externaliser la paie consiste à confier la production des bulletins, la
                DSN et les obligations associées à un prestataire spécialisé, afin de
                réduire les erreurs, maîtriser les coûts et préserver votre charge mentale.
              </p>
            </AnimatedFadeIn>

            {/* CTA row */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-700 to-indigo-400 px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-100 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)] active:scale-[0.98]"
              >
                Externaliser ma paie
                <span className="transition group-hover:translate-x-0,5">→</span>
              </a>

              <a
                href="#avantages"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-10 py-4 text-base font-semibold text-white/90 shadow-sm backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                Voir les avantages
              </a>
            </div>

            {/* 3 cards (style identique) */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-sm backdrop-blur transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-white/20">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                </div>
                <h2 className="mt-6 text-lg font-semibold text-white/95">
                  Conformité renforcée
                </h2>
                <p className="mt-2 text-sm text-white/75">
                  Un process cadré pour limiter les erreurs et sécuriser DSN & obligations.
                </p>
              </div>

              <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-sm backdrop-blur transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-white/20">
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
                    <path d="M4 19a2 2 0 0 0 2 2h12" />
                    <path d="M6 17V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
                    <path d="M9 7h6" />
                    <path d="M9 11h6" />
                    <path d="M9 15h4" />
                  </svg>
                </div>
                <h2 className="mt-6 text-lg font-semibold text-white/95">
                  Gain de temps immédiat
                </h2>
                <p className="mt-2 text-sm text-white/75">
                  Vous déléguez la production, vous gardez le pilotage et la visibilité.
                </p>
              </div>

              <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-sm backdrop-blur transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-white/20">
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
                    <path d="M3 17l6-6 4 4 7-7" />
                    <path d="M21 10V3h-7" />
                  </svg>
                </div>
                <h2 className="mt-6 text-lg font-semibold text-white/95">
                  Coûts maîtrisés
                </h2>
                <p className="mt-2 text-sm text-white/75">
                  Une tarification claire et un budget de paie plus prévisible.
                </p>
              </div>
            </div>

            {/* Micro-CTA */}
            <div className="mt-10 flex justify-center">
              <a
                href="#contact"
                className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white"
              >
                Parler de votre situation (réponse sous 48h)
              </a>
            </div>
          </div>
        </section>

        {/* TRANSITION LINE */}
        <div className="mt-8 flex justify-center">
          <div className="relative h-px w-72">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-2xl" />
          </div>
        </div>

        {/* SECTION: Avantages */}
        <section id="avantages" className="relative z-10 pt-10 pb-16 px-6 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <AnimatedFadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                Pourquoi externaliser la paie ?
              </h2>
              <p className="mt-6 text-white/75 text-center max-w-3xl mx-auto leading-relaxed">
                Externaliser la paie permet de réduire le risque d’erreurs, de gagner du temps,
                et de fiabiliser les déclarations sociales. C’est aussi un moyen simple de
                sécuriser votre conformité en continu.
              </p>
            </AnimatedFadeIn>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Réduction des erreurs et des régularisations",
                  desc: "Variables, absences, primes, IJSS, plafonds : une paie fiable limite les corrections et les tensions internes.",
                },
                {
                  title: "Conformité DSN et obligations sociales",
                  desc: "Déclarations et échéances : vous évitez les oublis, retards et incohérences qui coûtent cher.",
                },
                {
                  title: "Un pilotage plus simple",
                  desc: "Vous gardez la main sur les validations et les données, tout en déléguant la production.",
                },
                {
                  title: "Continuité en cas d’absence",
                  desc: "Congés, turnover, surcharge : la paie continue sans rupture, même quand l’interne n’est pas disponible.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-blue-300/30 bg-blue-950/50 p-8 shadow-xl backdrop-blur-lg"
                >
                  <h3 className="text-lg font-bold text-white/95">{card.title}</h3>
                  <p className="mt-3 text-sm text-white/75 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CONTENU “CLINIQUE” */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/75 to-blue-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              Externaliser la paie : comment ça fonctionne concrètement ?
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              L’externalisation de la paie repose sur un process simple : collecte des variables,
              production des bulletins, validation, DSN, puis archivage. L’objectif : un cycle
              mensuel fluide et sécurisé.
            </p>
          </AnimatedFadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1) Collecte des variables",
                desc: "Absences, primes, heures, entrées/sorties : vous transmettez vos éléments via un format simple.",
              },
              {
                title: "2) Production & contrôle",
                desc: "Bulletins établis puis contrôlés : cohérence, paramétrage, règles de paie, pièces manquantes.",
              },
              {
                title: "3) DSN & livrables",
                desc: "DSN déposée, bulletins transmis, documents associés prêts. Vous avez une traçabilité claire.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISQUES / ERREURS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-20 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              Ce que vous évitez en externalisant la paie
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              Externaliser la paie, c’est aussi réduire les “angles morts” : oublis de paramétrage,
              erreurs de saisie, incohérences DSN, ou retards dans les échéances.
            </p>
          </AnimatedFadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Erreurs de variables / calculs",
                bullets: ["heures/majorations", "primes, avantages", "absences, IJSS, subrogation"],
              },
              {
                title: "Incohérences DSN",
                bullets: ["blocages de dépôt", "anomalies URSSAF", "régularisations tardives"],
              },
              {
                title: "Départs / entrées mal cadrés",
                bullets: ["solde de tout compte", "attestations", "documents obligatoires"],
              },
              {
                title: "Conformité et mise à jour",
                bullets: ["paramétrage évolutif", "règles de paie", "organisation sécurisée"],
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

          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
            >
              Sécuriser ma paie dès maintenant
              <span className="transition group-hover:translate-x-0,5">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CHECKLIST CHOISIR PRESTATAIRE*/}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              Comment choisir un prestataire pour externaliser la paie ?
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              Pour une externalisation réussie, il faut un cadre : interlocuteur, process,
              confidentialité, et livrables fiables.
            </p>
          </AnimatedFadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Process & calendrier",
                desc: "Échéances claires, points de validation, et traçabilité (qui fait quoi, quand).",
              },
              {
                title: "Interlocuteur dédié",
                desc: "Une personne qui connaît votre dossier : réactivité et continuité.",
              },
              {
                title: "Confidentialité",
                desc: "Traitement discret des données sensibles : accès, échanges, stockage.",
              },
              {
                title: "Livrables et support",
                desc: "Bulletins, DSN, documents embauche/départ, et accompagnement en cas de question.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
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
