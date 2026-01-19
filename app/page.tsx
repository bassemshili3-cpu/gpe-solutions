import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import ContactForm from "@/components/ContactForm";
import StepsTypingClient from "../components/StepsTypingClient";

export default function Home() {
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "GPE Solutions",
      url: "https://gpe-solutions.fr",
      description:
        "Externalisation de la paie, DSN et accompagnement social pour TPE, PME et grandes entreprises.",
      areaServed: "FR",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@gpe-solutions.fr",
      },
    }),
  }}
/>
  return (
   <main className="min-h-screen bg-white text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-600">
  {/* Aurora / mesh living background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-blue-400/15 blur-3xl animate-floatSlow" />
    <div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-indigo-400/18 blur-3xl animate-floatSlow2" />
    <div className="absolute top-10 right-10 h-[380px] w-[380px] rounded-full bg-sky-300/10 blur-3xl animate-floatSlow3" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.18),transparent_55%)]" />
  </div>

  {/* Fine highlight line */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

  <div className="relative z-10 mx-auto max-w-6xl px-6 py-18 text-center">
    {/* Title group */}
    <div className="relative inline-block">
      
      {/* Titre blanc, net, premium */}
      <h1 className="title-light text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
  GPE Solutions
</h1>
    </div>

    {/* Sous-titre rapproché */}
    <p className="mt-3 text-sm md:text-base text-blue-100/90">
      Externalisation de la paie, DSN et accompagnement social
    </p>

    {/* Petit “sheen” discret sous le texte (sans rajouter de contenu) */}
    <div className="mx-auto mt-8 h-px w-48 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
  </div>

  {/* Séparateur bas discret */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
</header>

      {/* ================= HERO A-Z ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-10">
              Externalisez votre paie de A à Z
            </h2>
          </AnimatedFadeIn>

          {/* Cartes A-Z (INTERACTIVES) */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <div className="group rounded-3xl border border-blue-100 bg-blue-50/60 p-10 text-center shadow-sm transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition group-hover:scale-[1.03]">
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
              <h3 className="mt-6 text-lg font-semibold text-blue-900">
                Gestionnaire de paie qualifié
              </h3>
              <p className="mt-2 text-sm text-blue-800/80">
                Un interlocuteur unique, rigoureux et réactif.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="group rounded-3xl border border-blue-100 bg-blue-50/60 p-10 text-center shadow-sm transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition group-hover:scale-[1.03]">
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
              <h3 className="mt-6 text-lg font-semibold text-blue-900">
                Conformité réglementaire
              </h3>
              <p className="mt-2 text-sm text-blue-800/80">
                Respect strict des obligations sociales et déclaratives.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="group rounded-3xl border border-blue-100 bg-blue-50/60 p-10 text-center shadow-sm transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition group-hover:scale-[1.03]">
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
              <h3 className="mt-6 text-lg font-semibold text-blue-900">
                Coûts optimisés
              </h3>
              <p className="mt-2 text-sm text-blue-800/80">
                Tarification claire et adaptée à votre structure.
              </p>
            </div>
          </div>

          <AnimatedFadeIn>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Nous utilisons les outils les plus performants du marché pour vous
              garantir un service de qualité.
            </p>
          </AnimatedFadeIn>

          {/* CTA A-Z */}
          <AnimatedFadeIn>
            <div className="mt-10 flex flex-col items-center justify-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
              >
                Vérifier si GPE Solutions est adapté à mon entreprise
                <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <span className="text-xs text-gray-500">
                Réponse sous 24h • Sans engagement
              </span>
            </div>
          </AnimatedFadeIn>
        </div>
      </section>

      {/* ================= À QUI S’ADRESSE ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              À qui s’adresse GPE Solutions ?
            </h2>
            <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
              GPE Solutions accompagne les entreprises à chaque étape de leur
              développement, avec une approche fiable, humaine et conforme.
            </p>
          </AnimatedFadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tag: "Démarrage",
                title: "TPE & premier salarié",
                desc: "Vous recrutez ? Nous sécurisons les bases de la paie et des obligations sociales dès le départ.",
              },
              {
                tag: "Croissance",
                title: "PME en développement",
                desc: "Quand l’effectif augmente, la paie se complexifie. Nous structurons un process clair et maîtrisé.",
              },
              {
                tag: "Organisation",
                title: "Dirigeants & RH",
                desc: "Vous déléguez la paie tout en conservant visibilité et maîtrise des décisions.",
              },
              {
                tag: "Sécurité",
                title: "Besoin de fiabilité",
                desc: "Paie conforme, contrôlée, avec un traitement strict des données.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group rounded-3xl border border-blue-100 bg-gradient-to-b from-blue-50/60 to-white p-7 shadow-sm transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-blue-200"
              >
                <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900 border border-blue-100 transition group-hover:bg-white">
                  {c.tag}
                </div>
                <h3 className="mt-5 text-base font-bold text-gray-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POURQUOI GPE SOLUTIONS ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              Pourquoi choisir GPE Solutions ?
            </h2>
            <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
              Externaliser la paie, ce n’est pas seulement gagner du temps. C’est
              confier des données sensibles à un partenaire de confiance.
            </p>
          </AnimatedFadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Une expertise dédiée
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Vous échangez avec un gestionnaire de paie identifié, impliqué
                dans votre dossier. Chaque situation est analysée avec rigueur
                et discernement.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Une confidentialité totale
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Les données de paie sont parmi les plus sensibles d’une
                entreprise. Elles sont traitées avec discrétion, dans le respect
                strict des obligations de confidentialité et du cadre RGPD.
                <br />
                <br />
                Aucune revente, aucun usage détourné, aucun accès non justifié :
                vos informations restent strictement entre vos mains et celles
                de GPE Solutions.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Des processus fiables et maîtrisés
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De la collecte des éléments variables à la DSN, chaque étape est
                sécurisée et contrôlée. Objectif : réduire le risque d’erreur et
                assurer la conformité.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Une relation claire et transparente
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Vous savez ce qui est fait, quand et pourquoi. Nous restons
                disponibles pour tout renseignement nécessaire.
              </p>
            </div>
          </div>

          <AnimatedFadeIn>
            <div className="mt-10 flex flex-col items-center justify-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
              >
                Échanger en toute confidentialité
                <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <span className="text-xs text-gray-500">
                Données traitées de façon strictement confidentielle
              </span>
            </div>
          </AnimatedFadeIn>
        </div>
      </section>
 {/* ================= ÉTAPES (animation) ================= */}
      <StepsTypingClient />
 {/* ================= TARIFS ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              GPE Solutions, une tarification accessible
            </h2>
            <p className="mt-3 text-center text-gray-600">
              Une offre claire, pensée pour les TPE, PME et entreprises en
              croissance.
            </p>
          </AnimatedFadeIn>

          <div className="mt-12 flex justify-center">
            <AnimatedFadeIn>
              <div className="relative w-full max-w-md">
                <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-blue-200 bg-white p-8 shadow-[0_20px_60px_rgba(2,6,23,0.10)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(2,6,23,0.14)]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900">
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
                    Offre à partir de
                  </div>

                  <div className="mt-6">
                    <div className="text-sm font-semibold text-gray-500">
                      à partir de
                    </div>
                    <div className="mt-2 flex items-end justify-center gap-2">
                      <span className="text-5xl font-extrabold tracking-tight text-blue-900">
                        12€
                      </span>
                      <span className="mb-2 text-lg font-bold text-blue-900">
                        *
                      </span>
                      <span className="mb-2 text-sm text-gray-500">
                        / salarié
                      </span>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3 text-sm text-gray-700">
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

                  <div className="mt-10">
                    <a
                      href="#contact"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                    >
                      Demander un devis
                      <span className="transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                    <p className="mt-4 text-center text-xs text-gray-500 italic">
                      * Les tarifs varient selon l’effectif et la complexité du
                      dossier.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedFadeIn>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-3xl mx-auto">
          <AnimatedFadeIn>
            <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
              Formulaire de contact
            </h2>
            <p className="text-gray-600 text-center mb-10">
              Réponse garantie{" "}
              <span className="font-semibold text-blue-900">sous 24 heures</span>
              .
            </p>
          </AnimatedFadeIn>

          <AnimatedFadeIn>
            <ContactForm />
          </AnimatedFadeIn>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
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
