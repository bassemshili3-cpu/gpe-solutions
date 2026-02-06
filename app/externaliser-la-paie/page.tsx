// “Externaliser la paie”
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import ContactForm from "@/components/ContactForm";
import ClearHashOnLoad from "@/components/ClearHashOnLoad";
import Head from "next/head";
import ChoisirPrestataireSection from "@/components/ChoisirPrestataireSection";




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
    <>
      <Head>
        <title>
          Comment externaliser la paie ? Étapes, conseis & solutions | Tout savoir avec
          GPE Solutions | Service d'externalisation de la paie pour TPE PME et Grande
          entreprise
        </title>

        <meta
          name="description"
          content="Découvrez comment externaliser la paie : étapes clés, solutions possibles, avantages et conseils pour choisir le bon prestataire."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
        <ClearHashOnLoad />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* WRAPPER */}
        <div className="relative overflow-x-hidden overflow-y-visible bg-gradient-to-b from-blue-950 via-blue-950/85 to-white">
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
            <div className="max-w-5xl mx-auto text-center">
              <AnimatedFadeIn>
                <h1 className="mt-16 text-2xl md:text-4xl font-bold text-white/95">
                  GUIDE COMPLET POUR SAVOIR COMMENT EXTERNALISER LA PAIE 
              
                </h1>
              </AnimatedFadeIn>

              <div className="mt-8 text-center">
                <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <AnimatedFadeIn>
                <p className="mt-8 text-lg md:text-xl text-white/80 leading-[1.7] max-w-3xl mx-auto">
                  Cette page vous donnera toutes les informations pertinentes pour pouvoir externaliser la paie de votre entreprise. Externaliser consiste à confier la production des bulletins et/ou de la
                  DSN ainsi que les obligations associées à un prestataire spécialisé, 
                  
                </p>
              </AnimatedFadeIn>

              {/* CTA row */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-blue-900/70 via-indigo-600/70 to-indigo-700/80 px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-100 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)] active:scale-[0.98]"
                >
                  J'externalise
                  <span className="transition group-hover:translate-x-0,5">→</span>
                </a>

                
              </div>
</div>
             

          {/* TRANSITION LINE */}
          <div className="mt-8 flex justify-center">
            <div className="relative h-px w-72">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-2xl" />
            </div>
          </div>
</section>
          {/* SECTION: Avantages */}
          <section id="avantages" className="relative z-10 pt-10 pb-16 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
              <AnimatedFadeIn>
                <h2 className="-mt-5 text-3xl md:text-4xl font-bold text-white text-center">
                  LES AVANTAGES
                </h2>
                <p className="mt-6 text-white/85 text-center text-xl mx-auto leading-relaxed">
                  Il est vrai que pour une entreprise, externaliser la paie permet souvent un gain de temps considérable, mais c'est loin d'être le seul avantage. 
                  Cela permet également de réduire le risque d’erreurs, et de fiabiliser vos déclarations sociales, afin d'assurer une 
                  conformité de manière continue. C’est donc avant tout une <strong>sécurité</strong> pour votre entreprise. Il est bon de rappeler 
                  que la paye française est complexe, et peut représenter une charge mentale, ce qui donne toute la pertinence 
                  au service d'externalisation 
                </p>
              </AnimatedFadeIn>

              <div className="mt-18 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm text-white ">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto"></div>
        <h2 className="-mt-5 text-3xl md:text-3xl font-bold text-blue-800/80 text-center">
                Comment externaliser la paie ?
              </h2>
             <div className="mt-8 max-w-4xl mx-auto text-center space-y-4">
         
           <p className="mt-8 text-lg text-gray-600 leading-relaxed"> Pour externaliser la paie il vous faut d'abord choisir le prestataire que vous souhaitez, parmi plusieurs options. 
            Vous pouvez par exemple vous tourner vers un cabinet comptable. Ils proposent la paie comme une prestation complémentaire, souvent intégrée à un 
             accompagnement global. Sinon, d’autres entreprises spécialisées, comme GPE Solutions, se consacrent exclusivement 
             à la gestion de la paie. Enfin, vous pouvez également vous tourner vers des gestionnaires de paie 
             indépendants sur des plateformes de Freelance</p>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Une fois votre prestataire de paie choisi, il faut organiser l'externalisation avec ce dernier. 
            Le processus est généralement le suivant:</p>
        </div>
        {/* Timeline chevrons (SVG) : bordure noire affinée + couleurs douces */}
        <div className="mt-12">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[980px]">
                <svg
                  viewBox="0 0 1200 140"
                  className="w-full h-[110px]"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="rgba(59,130,246,0.28)" />
                      <stop offset="1" stopColor="rgba(34,211,238,0.22)" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="rgba(99,102,241,0.26)" />
                      <stop offset="1" stopColor="rgba(236,72,153,0.18)" />
                    </linearGradient>
                    <linearGradient id="g3" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="rgba(124,58,237,0.24)" />
                      <stop offset="1" stopColor="rgba(14,165,233,0.20)" />
                    </linearGradient>
                  </defs>

                  <polygon
                    points="0,20 380,20 450,70 380,120 0,120"
                    fill="url(#g1)"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />

                  <polygon
                    points="420,20 780,20 850,70 780,120 420,120 490,70"
                    fill="url(#g2)"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />

                  <polygon
                    points="820,20 1200,20 1200,120 820,120 890,70"
                    fill="url(#g3)"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />

                  <g>
                    <circle cx="220" cy="70" r="20" fill="rgba(255,255,255,0.55)" stroke="#000" strokeWidth="2" />
                    <text x="220" y="76" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111">1</text>

                    <circle cx="635" cy="70" r="20" fill="rgba(255,255,255,0.55)" stroke="#000" strokeWidth="2" />
                    <text x="635" y="76" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111">2</text>

                    <circle cx="1045" cy="70" r="20" fill="rgba(255,255,255,0.55)" stroke="#000" strokeWidth="2" />
                    <text x="1045" y="76" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111">3</text>
                  </g>
                </svg>

                <div className="mt-6 grid grid-cols-3 gap-10 text-center">
                  <div>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                      Vous
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-gray-900 tracking-tight">
                      Collecte des variables
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      Absences, primes, heures…
                    </p>
                  </div>

                  <div>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                      Nous
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-gray-900 tracking-tight">
                      Production & contrôle
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      Édition + contrôles paie
                    </p>
                  </div>

                  <div>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-violet-50 text-violet-700 ring-1 ring-violet-100">
                      Nous
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-gray-900 tracking-tight">
                      DSN & livrables
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      DSN + bulletins + archivage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* CHECKLIST CHOISIR PRESTATAIRE*/}
       <ChoisirPrestataireSection />


        {/* CONTACT */}
        <section id="contact" className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <AnimatedFadeIn>
              <h2 className="text-4xl font-bold text-blue-900 mb-2 text-center">
                Formulaire de contact
              </h2>
              <p className="text-gray-600 text-center mb-12">
                Réponse garantie <span className="font-semibold text-blue-900">sous 48 heures</span>.
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
    </>
  );
}
