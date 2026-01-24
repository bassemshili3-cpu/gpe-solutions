import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import ContactForm from "@/components/ContactForm";
import StepsTypingClient from "../components/StepsTypingClient";
import ClearHashOnLoad from "@/components/ClearHashOnLoad";

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

   <main className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
<ClearHashOnLoad />

    {/* ================= TOP WRAPPER (fond global jusqu'aux tarifs) ================= */}
<div className="relative overflow-x-hidden overflow-y-visible bg-gradient-to-b from-blue-950 via-blue-950/85 to-blue-50">
  {/* Mesh / aurora global */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/12 blur-3xl" />
    <div className="absolute -top-32 right-0 translate-x-24 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
    <div className="absolute top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-3xl" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.10),transparent_55%)]" />
    {/* légère "brume" qui adoucit le passage vers le clair */}
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-white/40" />
  </div>

{/* ================= HEADER ================= */}
<header className="relative">
  {/* Fine highlight line (subtile) */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

  <div className="relative z-10 w-full px-3 pt-3 pb-0">
    {/* Top bar */}
    <div className="flex items-center justify-between">
      {/* Logotype */}
      <div className="flex items-center gap-3">
        
        {/* Texte */}
        <div className="leading-tight">
          <div className="text-2xl font-extrabold tracking-tight whitespace-nowrap">
            <span className="text-blue-300">GPE</span>{" "}
            <span className="text-white/95">Solutions</span>
          </div>
          <div className="text-[14px] font-medium text-white/55 whitespace-nowrap">
            Gestion Paie Externalisée
          </div>
        </div>

        {/* Logo à droite */}
        <div className="relative flex-shrink-0 h-14 w-14 items-center justify-center">
          {/* Halo doux */}
          <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-violet-500/20 blur-2xl" />

          {/* Icône */}
          <img
            src="/icon.png"
            alt="GPE Solutions"
            className="relative h-16 w-16 object-contain"
            draggable={false}
          />
        </div>
      </div>

      <div className="mx-auto mt-8 h-px w-56 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  </div>
</header>


  {/* ================= HERO A-Z ================= */}
  {/* NOTE : bg-transparent pour laisser le fond global "porter" */}
  <section className="relative z-10 py-6 px-6 bg-transparent">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedFadeIn>
        <h2 className="mt-10 text-3xl md:text-5xl font-bold text-white/95 mb-10">
          Votre service d'externalisation de la paie & DSN        </h2>
      </AnimatedFadeIn>

      <div className="mt-16 mb-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Carte 1 */}
        <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-sm backdrop-blur transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-white/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:scale-[1.03]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            </svg>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-white/95">
            Gestionnaire de paie qualifié
          </h3>
          <p className="mt-2 text-sm text-white/75">
            Un interlocuteur unique et réactif.
          </p>
        </div>

        {/* Carte 2 */}
        <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-sm backdrop-blur transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-white/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:scale-[1.03]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
              <path d="M4 19a2 2 0 0 0 2 2h12" />
              <path d="M6 17V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
              <path d="M9 7h6" />
              <path d="M9 11h6" />
              <path d="M9 15h4" />
            </svg>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-white/95">
            Conformité réglementaire
          </h3>
          <p className="mt-2 text-sm text-white/75">
            Respect strict des obligations sociales et déclaratives.
          </p>
        </div>

        {/* Carte 3 */}
        <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-sm backdrop-blur transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-white/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:scale-[1.03]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
              <path d="M3 17l6-6 4 4 7-7" />
              <path d="M21 10V3h-7" />
            </svg>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-white/95">
            Vos coûts de gestion optimisés
          </h3>
          <p className="mt-2 text-sm text-white/75">
            Tarifs adaptés à votre structure.
          </p>
        </div>
      </div>

      {/* Logo Sage (iconic) */}
      <div className="mt-23 flex flex-col items-center text-center">
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

      <AnimatedFadeIn>
        <p className="mt-10 text-lg md:text-xl text-white/80 leading-[1.6] max-w-3xl mx-auto text-center">
          Nous travaillons sur le logiciel{" "}
          <span className="font-semibold text-white">Sage</span>, une référence dans le milieu de la paie.
        </p>
      </AnimatedFadeIn>
    </div>
  </section>

  {/* ================= TARIFS ================= */}
  {/* IMPORTANT : bg-transparent pour laisser le wrapper faire le fond */}
  <section className="relative z-10 pt-10 pb-16 px-6 bg-transparent">
    <div className="max-w-6xl mx-auto">
      <AnimatedFadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Grille tarifaire :
        </h2>
      </AnimatedFadeIn>

      <div className="mt-12 flex justify-center">
        <AnimatedFadeIn>
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-blue-200 bg-white p-8 shadow-[0_20px_60px_rgba(2,6,23,0.10)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(2,6,23,0.14)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900">
                <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
                Tarifs transparents
              </div>

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
        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-900 px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-100 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)] active:scale-[0.98]"
          >
            J’externalise avec GPE Solutions
            <span className="transition group-hover:translate-x-0,5">→</span>
          </a>
        </div>
  </section>
</div>


{/* ================= À QUI S’ADRESSE ================= */}
<section className="relative overflow-hidden bg-gradient-to-b from-blue-50/75 to-blue-20">
  <div className="max-w-6xl mx-auto">
    <AnimatedFadeIn>
      <h2 className="mt-6 text-3xl md:text-4xl font-bold text-blue-900 text-center">
        À qui s’adresse GPE Solutions ?
      </h2>

      {/* Ligne principale */}
      <p className="mt-12 text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
        Pour toute entreprise qui souhaite une paie fiable, maîtrisée, et sans charge mentale.
      </p>

      {/* Pills / badges gradient 2026 */}
      <div className="mt-9 flex flex-wrap justify-center gap-4">
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

<div className="my-14 flex justify-center">
  <div className="relative h-px w-164">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/20 to-transparent" />
    <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-2xl" />
  </div>
</div>

<div className="my-14 flex justify-center">
  <span className="mt-9 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-14 py-4 text-2xl font-semibold text-blue-900 shadow-sm backdrop-blur">
    Et concrètement, pourquoi GPE ?
  </span>
</div>

     {/* ================= POURQUOI GPE SOLUTIONS ================= */}
<section className="relative overflow-hidden bg-gradient-to-b from-blue-20 via-white to-indigo-50">
  <div className="max-w-6xl mx-auto">
   <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
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
        className="py-10 px-6 bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <AnimatedFadeIn>
            <h2 className="text-4xl font-bold text-blue-900 mb-2 text-center">
              Formulaire de contact
            </h2>
            <p className="text-gray-600 text-center mb-12">
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
