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
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-blue-900 mb-10">
              Externalisez votre paie de A à Z
            </h2>
          </AnimatedFadeIn>

          {/* Cartes A-Z (INTERACTIVES) */}
          <div className="mt-20 mb-10 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Un interlocuteur unique et réactif.
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
               Vos coûts de gestion optimisés
              </h3>
              <p className="mt-2 text-sm text-blue-800/80">
                Tarifs adaptés à votre structure.
              </p>
            </div>
          </div>
{/* Logo Sage (iconic) */}
<div className="mt-20 flex flex-col items-center text-center">
  <div className="relative">
    {/* Halo doux */}
    <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl animate-pulse" />

    {/* Ring gradient */}
    <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 opacity-70 blur-[0.5px]" />

    {/* Pastille */}
    <div className="group relative flex h-28 w-32 items-center justify-center rounded-full bg-white shadow-sm">
      {/* Mini shine au hover */}
      <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rotate-12 bg-white/30 blur-xl" />
      </div>

      <img
        src="/Sage_logo.svg" 
        alt="Sage"
        className="h-7 w-auto object-contain"
        draggable={false}
      />
    </div>
  </div>
</div>


          <AnimatedFadeIn>
<p className="mt-7 text-base md:text-xl text-gray-600 leading-[1.6] max-w-3xl mx-auto text-center">
  Nous travaillons sur le logiciel{" "}
  <span className="font-semibold text-gray-900">Sage</span>, une référence dans le milieu de la paie.
</p>

        </AnimatedFadeIn>
        </div>
      </section>
       {/* ================= TARIFS ================= */}
<section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-6xl mx-auto">
    <AnimatedFadeIn>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
        Grille tarifaire: 
      </h2>
    </AnimatedFadeIn>

    <div className="mt-12 flex justify-center">
      <AnimatedFadeIn>
        <div className="relative w-full max-w-md">
          {/* Glow background (fidèle à l’original) */}
          <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-blue-200 bg-white p-8 shadow-[0_20px_60px_rgba(2,6,23,0.10)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(2,6,23,0.14)]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
              Tarifs transparents
            </div>

            {/* Tarifs (grille compacte) */}
            <div className="mt-6">
              <div className="text-sm font-semibold text-gray-500">
                Tarif / bulletin
              </div>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-3">
                <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-3 pb-2 text-[11px] font-semibold uppercase tracking-wide text-blue-900/60">
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
                      className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-blue-100 bg-white/80 px-3 py-2.5 shadow-sm"
                    >
                      <span className="text-sm font-medium text-gray-800">
                        {effectif}
                      </span>

                      <span className="justify-self-end">
                        <span className="inline-flex items-center rounded-lg bg-gradient-to-br from-blue-700 to-indigo-700 px-2.5 py-1 text-sm font-bold text-white shadow-sm">
                          {prix}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inclus */}
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

          </div>
        </div>
      </AnimatedFadeIn>
    </div>
  </div>
</section>
{/* ================= À QUI S’ADRESSE ================= */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <AnimatedFadeIn>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
        À qui s’adresse GPE Solutions ?
      </h2>

      {/* Ligne principale */}
      <p className="mt-12 text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
        Pour toute entreprise qui souahite une paie fiable, maîtrisée, et sans charge mentale.
      </p>

      {/* Pills / badges gradient 2026 */}
      <div className="mt-13 flex flex-wrap justify-center gap-4">
        {[
          "TPE & premiers salariés",
          "PME en croissance",
          "Dirigeants & RH",
          "Entreprises exigeantes",
        ].map((label) => (
          <div
            key={label}
            className="rounded-full border border-blue-100 bg-gradient-to-br from-blue-50 to-white px-5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {label}
          </div>
        ))}
      </div>
    </AnimatedFadeIn>
  </div>
</section>

     {/* ================= POURQUOI GPE SOLUTIONS ================= */}
<section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-6xl mx-auto">
    <AnimatedFadeIn>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
        Pourquoi choisir GPE Solutions ?
      </h2>
    </AnimatedFadeIn>

    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Une expertise dédiée
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Un interlocuteur unique, impliqué dans votre dossier, pour une paie
          claire et bien suivie.
        </p>
      </div>

      <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Une confidentialité totale
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Conscients de l'importance de la confidentalité en paie, nous traitons cette dernière en toute discrétion.
        </p>
      </div>

      <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Des process fiables
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Variables → bulletins → DSN : chaque étape est contrôlée pour limiter
          les erreurs et rester conforme.
        </p>
      </div>

      <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Une relation transparente
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Vous savez où on en est, ce qui est fait, et quand. Réponse rapide en
          cas de question.
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
