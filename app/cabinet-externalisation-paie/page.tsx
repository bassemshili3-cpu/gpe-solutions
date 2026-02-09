// “Cabinet externalisation paie”
"use client";
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import ContactForm from "@/components/ContactForm";
import ClearHashOnLoad from "@/components/ClearHashOnLoad";
import Head from "next/head";
import TarifsCTA from "@/components/TarifsCTA"



export default function CabinetExternalisationPaiePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GPE Solutions",
    url: "https://gpe-solutions.fr/cabinet-externalisation-paie",
    description:
      "Cabinet externalisation paie : faut-il forcément passer par un cabinet comptable pour externaliser la paie ? Comparaison des options, critères de choix, et alternative dédiée pour TPE/PME avec GPE Solutions.",
    areaServed: "FR",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@gpe-solutions.fr",
    },
    serviceType: ["Externalisation de la paie", "DSN", "Gestion sociale"],
  };

  // FAQ (contenu léger, à personnaliser ensuite)
  const faq = [
    {
      q: "Faut-il obligatoirement passer par un cabinet comptable pour externaliser la paie ?",
      a: "Non. Un cabinet comptable peut être pertinent dans certaines situations, mais il existe aussi des prestataires spécialisés en paie qui se concentrent sur la production des bulletins, la DSN et l’accompagnement social au quotidien.",
    },
    {
      q: "Dans quels cas un cabinet comptable est-il particulièrement adapté ?",
      a: "Quand vous cherchez un accompagnement global (comptabilité, fiscalité, juridique) ou une coordination complète des sujets de gestion. Cela peut être utile si vos besoins dépassent la paie seule.",
    },
    {
      q: "Qu’est-ce qu’un service dédié à la paie apporte de différent ?",
      a: "Un suivi plus direct, une organisation orientée paie/DSN, et une réactivité pensée pour les aléas du mois (absences, primes, entrées/sorties). L’objectif est de rendre le cycle mensuel plus fluide et plus prévisible.",
    },
    {
      q: "Comment comparer deux prestataires d’externalisation de la paie ?",
      a: "En regardant le périmètre inclus (DSN, entrées/sorties, support), la clarté des tarifs, la méthode de collecte/validation, la confidentialité, la traçabilité, et la capacité à gérer vos spécificités (convention, variables, IJSS…).",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Faut-il forcément passer par un cabinet
          comptable pour l'externalisation de la paie ? | GPE Solutions
        </title>

        <meta
          name="description"
          content="Cabinet externalisation paie : faut-il forcément passer par un cabinet comptable pour externaliser la paie ? Critères de choix, situations où un cabinet est pertinent, et alternative dédiée pour TPE/PME avec GPE Solutions."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
        <ClearHashOnLoad />

        {/* WRAPPER (signature site) */}
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

                {/* CTA 1 (bouton) -> #contact */}
                <div className="hidden md:flex items-center gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700/80 via-indigo-700/80 to-blue-600/80 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                  >
                    Demander un avis
                    
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* HERO */}
          <section className="relative z-10 py-10 px-6 bg-transparent">
            <div className="relative max-w-5xl mx-auto text-center">
              <AnimatedFadeIn>
                <h1 className="mt-6 text-3xl md:text-4xl font-bold text-white/95 relative">
                  Faut-il forcément passer par un cabinet
          comptable pour l'externalisation de la paie ?
                </h1>
              </AnimatedFadeIn>

              <div className="mt-8 text-center">
                <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <AnimatedFadeIn>
                <p className="mt-12 text-lg md:text-xl text-white/80 leading-[1.7] max-w-3xl mx-auto relative">
                  Beaucoup d’entreprises associent naturellement l’externalisation de la paie à un
                  cabinet comptable. À travers cette page nous allons vous aider à choisir votre
                  prestataire de paie en fonction de critères concrets, puis vous montrer quand une 
                  solution alternative devient plus pertinente, en particulier pour les TPE et PME.
                </p>
              </AnimatedFadeIn>

              {/* Lien texte (1/5) vers contact */}
              <div className="mt-10 flex justify-center">
                <a
                  href="#contact"
                  className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white"
                >
                  Échanger sur votre situation
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

          {/* SECTION: Le vrai sujet (nuancer) */}
          
            <div className="max-w-5xl mx-auto">
              <AnimatedFadeIn>
                <h2 className= "mt-6 font-manrope text-4xl text-center text-white">
                  Le point crucial pour une externalisation de la paie réussie
                </h2>
              </AnimatedFadeIn>

              <AnimatedFadeIn>
                <p className="mt-10 text-white/80 leading-relaxed max-w-4xl mx-auto text-center text-lg">
                  Nous sommmes nombreux à savoir que le traitement de la paye est complexe 
                  et qu'il implique la manipulation de données très sensibles. Partant de là, il est normal 
                  de vouloir solliciter le service le plus sûr et qualitatif si on souhaite externaliser. 
                  Un cabinet comptable apparaît alors souvent comme une évidence</p>

                 <p className="mt-10 text-white/80 leading-relaxed max-w-4xl mx-auto text-center text-lg">
                  Mais le point à ne pas négliger est qu'une externalisation réussie ne passe pas toujours 
                  par un cabinet comptable. Les cabinets représentent une excellente option pour les employeurs
                  à la tête d'entreprises avec des centaines de salariés. En pratique, nous constatons que pour les 
                  petites et  moyennes entreprises, qui ont généralement besoin d'un accompagnement plus régulier,
                   les services dédiés à la gestion de la paie, ou encore les gestionnaires de paie indépendants, peuvent 
                  se révéler plus appropriés</p>

              </AnimatedFadeIn>

              <AnimatedFadeIn>
                <p className="mt-6 text-white/80 leading-relaxed max-w-4xl mx-auto text-center text-lg">
                  Vous l'aurez compris, le plus important pour vous est avant tout d'avoir un prestataire <strong>adapté</strong> à
                  votre situation : souhaitez-vous une coordination globale (compta, fiscalité, juridique), ou un cycle de paie
                  très cadré, réactif, et stable mois après mois ?
                </p>
              </AnimatedFadeIn>
            </div>
          <h2 className="mt-8 font-manrope text-4xl text-center text-white">
                  L'avantage d'un service paie indépendant  
                </h2>
                <p className="mt-7 text-white/80 leading-relaxed max-w-4xl mx-auto text-center text-lg">
                 L'exemple idéal pour illustrer cette idée serait de prendre pour exemple notre service 
                 d'externalisation GPE Solutions. Le fait d'être un service indépendant dédié à la paie 
                 nous a permis d'avoir plus de temps pour développer des méthodes de travail innovantes et
                 optimisées, dans l'optique de produire des fiches de paie les plus conformes possibles.
                 Nous avons pris la décision de limiter le volumes de bulletins de paie que nous traitons par mois,
                 afin d'introduire une méthode de travail complémentaire aux outils sophistiqués que l'on utilise déjà 
                 pour traiter la paye: <strong>l'analyse de data.</strong>
                </p>

           <TarifsCTA />

          {/* SECTION: Argument ultime (paie + data) */}
          
            <div className="max-w-5xl mx-auto">
             
                <h2 className="mt-8 font-manrope text-4xl text-center text-white">
                 Alors, besoin d'une entreprise d'externalisation paie ? 
                </h2>
              
                <p className="mt-10 text-white/80 leading-relaxed max-w-4xl mx-auto text-center text-lg">
                 N'hésitez pas à nous contacter dès aujourd'hui, en remplissant le formulaire ci-dessous.
                 Notre service est parfaitement adapté pour les TPE et les PME également, et notre équipe
                 prendra contact avec vous le plus tôt possible</p>

           {/*Formulaire*/}
            <div id="contact" className="max-w-3xl mx-auto scroll-mt-5">
              <AnimatedFadeIn>
    <h2 className="mt-10 text-4xl font-bold text-white mb-2 text-center">
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
          </div>
          <p><br></br> 
          </p>
         
        {/* FOOTER */}
        
  <div className= "mt-5 mx-auto-w-6x1 px-6 py-12 text-center text-xs text-gray-500">
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
        
         {/* ✅ IMPORTANT : on ferme le wrapper ici */}
        </div>
      </main>
    </>
  );
}
