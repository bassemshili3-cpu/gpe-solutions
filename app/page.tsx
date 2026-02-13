import Head from "next/head";
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import ContactForm from "@/components/ContactForm";
import StepsTypingClient from "../components/StepsTypingClient";
import ClearHashOnLoad from "@/components/ClearHashOnLoad";

export default function Home() {
  const schema = {
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
  };

  return (
    <>
      <Head>
        <meta name="verify-admitad" content="2590e74bf1" />
        <title>
          Service d&apos;Externalisation de la paie pour une gestion fiable des fiches de paie de votre entreprise | Adapté
          TPE &amp; PME | GPE Solutions
        </title>

        <meta
          name="description"
          content="GPE Solutions: Votre entreprise d'externalisation experte en paie et DSN pour TPE et PME. Service fiable, conforme et accessible, avec un interlocuteur dédié."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
        <ClearHashOnLoad />

        {/* ================= WRAPPER GLOBAL (se ferme SOUS le footer) ================= */}
        <div className="relative overflow-x-hidden overflow-y-visible bg-gradient-to-b from-blue-950 via-blue-950/90 to-white">
          {/* Mesh / aurora global */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/12 blur-3xl" />
            <div className="absolute -top-32 right-0 translate-x-24 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.10),transparent_55%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-white/40" />
          </div>

          {/* ================= HEADER ================= */}
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

                <div className="hidden md:block text-xs text-white/55" />
              </div>
            </div>
          </header>

          {/* ================= HERO ================= */}
          <section className="relative z-10 px-6 pt-6">
            <div className="max-w-5xl mx-auto text-center">
              <AnimatedFadeIn>
                <h1 className="mt-16 text-2xl md:text-4xl font-bold text-white/95">
                  Votre service d&apos;externalisation pour une gestion fiable des fiches
                  de paie &amp; DSN de votre entreprise
                </h1>
              </AnimatedFadeIn>

              <div className="mt-8 flex justify-center">
                <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Gestionnaire de paie qualifié",
                    desc: "Prestataire spécialisé en gestion de la paie externalisée.",
                    icon: (
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    ),
                  },
                  {
                    title: "Conformité réglementaire",
                    desc: "Respect strict des obligations sociales et déclaratives.",
                    icon: (
                      <>
                        <path d="M4 19a2 2 0 0 0 2 2h12" />
                        <path d="M6 17V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
                        <path d="M9 7h6" />
                        <path d="M9 11h6" />
                        <path d="M9 15h4" />
                      </>
                    ),
                  },
                  {
                    title: "Vos coûts de gestion optimisés",
                    desc: "Vos bulletins de paie à un tarif adapté.",
                    icon: (
                      <>
                        <path d="M3 17l6-6 4 4 7-7" />
                        <path d="M21 10V3h-7" />
                      </>
                    ),
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-sm backdrop-blur transition-all duration-200 ease-out transform-gpu hover:-translate-y-1 hover:shadow-md hover:border-white/20"
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
                        {c.icon}
                      </svg>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-white/95">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75">{c.desc}</p>
                  </div>
                ))}
              </div>

              {/* Logo Sage */}
              <div className="mt-14 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-violet-500/25 blur-2xl animate-pulse" />
                  <div className="absolute -inset-[4px] bg-gradient-to-br from-blue-900 via-white to-violet-900 opacity-70 blur-[0.5px]" />

                  <div className="group relative flex h-16 w-[120px] items-center justify-center">
                    <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute -left-10 top-1/2 h-14 w-14 -translate-y-1/2 rotate-12 bg-white/30 blur-xl" />
                    </div>

                    <img
                      src="/Sage_logo.png"
                      alt="Sage"
                      className="h-16 w-auto object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              <AnimatedFadeIn>
                <p className="mt-10 text-lg md:text-xl text-white/80 leading-[1.6] max-w-3xl mx-auto text-center">
                  Afin d&apos;offrir une externalisation qualitative de la paie pour votre
                  entreprise, nous utilisons le logiciel{" "}
                  <span className="font-semibold text-white">Sage</span>, une référence
                  dans le milieu.
                </p>
              </AnimatedFadeIn>
            </div>
          </section>

          {/* ================= TARIFS ================= */}
          <section className="relative z-10 px-6 pt-16">
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
                      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-900">
                        <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
                        Le coût d&apos;un bulletin de paie varie selon l&apos;effectif
                      </div>

                      <div className="mt-6">
                        <div className="text-sm font-semibold text-gray-500">
                          Tarif / bulletin
                        </div>

                        <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-3">
                          <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-3 pb-2 text-[11px] font-semibold uppercase tracking-wide text-blue-700/60">
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

              {/* CTA */}
              <div className="mt-10 flex justify-center">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-indigo-700/80 px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-100 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)] active:scale-[0.98]"
                >
                  J&apos;externalise avec GPE Solutions
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          </section>

          {/* ================= À QUI S’ADRESSE ================= */}
          <section className="relative z-10 px-6 pt-16">
            <div className="max-w-6xl mx-auto">
              <AnimatedFadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Qui peut solliciter GPE comme prestataire de paie ?
                </h2>

                <p className="mt-10 text-lg md:text-xl text-white/85 leading-relaxed max-w-4xl mx-auto text-center">
                  Toute entreprise à la recherche d&apos;une solution d’externalisation de
                  la paie fiable, maîtrisée, et sans charge mentale.
                </p>
              </AnimatedFadeIn>

              <div className="my-14 flex justify-center">
                <div className="relative h-px w-72">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-2xl" />
                </div>
              </div>

              <div className="-mt-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Une gestion de la paie avec une expertise dédiée",
                    desc: "Un interlocuteur unique, impliqué dans votre dossier, pour une paie claire et bien suivie.",
                  },
                  {
                    title: "Une confidentialité totale",
                    desc: "Conscients de l'importance de la confidentialité en paie, nous traitons cette dernière en toute discrétion.",
                  },
                  {
                    title: "Des process fiables",
                    desc: "Variables → bulletins → DSN : chaque étape est contrôlée pour limiter les erreurs et rester conforme.",
                  },
                  {
                    title: "Une relation transparente",
                    desc: "Vous savez où on en est, ce qui est fait, et quand. Réponse rapide en cas de question.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur"
                  >
                    <h3 className="text-lg font-bold text-white/95 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= ÉTAPES (animation) ================= */}
          <section className="relative z-10 px-6 pt-16">
            <StepsTypingClient />
          </section>

          {/*Formulaire*/}
                      <div id="contact" className="max-w-3xl mx-auto scroll-mt-5">
                        <AnimatedFadeIn>
              <h2 className="-mt-10 text-4xl font-bold text-white mb-2 text-center">
                Formulaire de contact
              </h2>
               <p className="text-white text-center mb-12">
                          Réponse garantie{" "}
                          <span className="font-semibold text-white">sous 48 heures</span>.
                        </p>
                      </AnimatedFadeIn>
          
                      <AnimatedFadeIn>
                        <ContactForm />
                      </AnimatedFadeIn>
                    </div>

          {/* ================= FOOTER (clair) ================= */}
          
            <div className="mt-5 mx-auto-w-6x1 px-6 py-12 text-center text-xs text-gray-500">
              
              <div>© 2026 GPE Solutions. Tous droits réservés.</div>

              <div className="flex items-center justify-center gap-3">
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
          

          {/* ✅ fermeture du wrapper GLOBAL exactement ici, SOUS le footer */}
        </div>
        
      </main>
    </>
  );
}
