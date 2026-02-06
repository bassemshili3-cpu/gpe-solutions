// “Cabinet externalisation paie”
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import ContactForm from "@/components/ContactForm";
import ClearHashOnLoad from "@/components/ClearHashOnLoad";
import Head from "next/head";

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
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-700 to-indigo-400 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                  >
                    Demander un avis
                    <span className="transition group-hover:translate-x-0,5">→</span>
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
                  cabinet comptable. C’est logique, mais ce n’est pas toujours la meilleure
                  option selon votre organisation, votre volume, et surtout votre besoin
                  d’accompagnement au quotidien.
                </p>
              </AnimatedFadeIn>

              <AnimatedFadeIn>
                <p className="mt-6 text-lg md:text-xl text-white/80 leading-[1.7] max-w-3xl mx-auto relative">
                  L’objectif de cette page est simple : vous aider à choisir en fonction de
                  critères concrets, puis vous montrer quand une solution dédiée comme GPE
                  Solutions devient plus pertinente, en particulier pour les TPE et PME.
                </p>
              </AnimatedFadeIn>

              {/* 3 cartes (signature visuelle du site, conservées dans le hero) */}
              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Clarifier votre besoin",
                    desc: "Souhaitez-vous un accompagnement global, ou une paie cadrée et fluide chaque mois ?",
                    icon: <path d="M9 7h6M9 11h6M9 15h4M6 17V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />,
                  },
                  {
                    title: "Comparer les options",
                    desc: "Cabinet comptable, prestataire paie, ou solution hybride : les forces ne sont pas les mêmes.",
                    icon: <path d="M3 17l6-6 4 4 7-7" />,
                  },
                  {
                    title: "Sécuriser la conformité",
                    desc: "Le bon choix est celui qui réduit les erreurs, les retards et les régularisations.",
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
          <section className="relative z-10 py-20 px-6 bg-transparent">
            <div className="max-w-5xl mx-auto">
              <AnimatedFadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Pourquoi la question “cabinet ou pas” revient aussi souvent ?
                </h2>
              </AnimatedFadeIn>

              <AnimatedFadeIn>
                <p className="mt-10 text-white/80 leading-relaxed max-w-4xl mx-auto text-center text-lg">
                  Parce que la paie touche à la fois le quotidien des salariés et la conformité de
                  l’entreprise. Quand on manque de temps, qu’un profil paie quitte l’entreprise,
                  ou que les règles se complexifient, la première réaction est de chercher une
                  structure “sûre”. Un cabinet comptable apparaît alors comme une évidence.
                </p>
              </AnimatedFadeIn>

              <AnimatedFadeIn>
                <p className="mt-6 text-white/80 leading-relaxed max-w-4xl mx-auto text-center text-lg">
                  Mais en pratique, le bon choix dépend surtout de votre besoin réel : souhaitez-vous
                  une coordination globale (compta, fiscalité, juridique), ou un cycle de paie
                  très cadré, réactif, et stable mois après mois ?
                </p>
              </AnimatedFadeIn>
            </div>
          </section>

          {/* SECTION: Comparatif (table) */}
          <section className="relative z-10 pb-24 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
              <AnimatedFadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Cabinet comptable, prestataire paie, logiciel assisté : quelles différences ?
                </h2>
              </AnimatedFadeIn>

              <div className="mt-12 overflow-x-auto">
                <table className="w-full border-collapse border-2 border-white/35 bg-transparent">
                  <thead>
                    <tr className="border-b-2 border-white/30">
                      <th className="px-6 py-4 text-left text-[12px] uppercase tracking-wide font-semibold text-white/90 border-r border-white/25">
                        Option
                      </th>
                      <th className="px-6 py-4 text-left text-[12px] uppercase tracking-wide font-semibold text-white/90 border-r border-white/25">
                        Pertinent si
                      </th>
                      <th className="px-6 py-4 text-left text-[12px] uppercase tracking-wide font-semibold text-white/90">
                        Points d’attention
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-white/15">
                      <td className="px-6 py-4 font-medium text-white border-r border-white/20">
                        Cabinet comptable
                      </td>
                      <td className="px-6 py-4 text-white/85 border-r border-white/20">
                        Vous cherchez un accompagnement global et centralisé.
                      </td>
                      <td className="px-6 py-4 text-white/70 text-sm">
                        Vérifier la réactivité paie/DSN, le périmètre inclus et l’organisation du support.
                      </td>
                    </tr>

                    <tr className="border-b border-white/15 bg-white/[0.03]">
                      <td className="px-6 py-4 font-medium text-white border-r border-white/20">
                        Prestataire paie dédié
                      </td>
                      <td className="px-6 py-4 text-white/85 border-r border-white/20">
                        Vous voulez un cycle mensuel fluide et un suivi orienté paie.
                      </td>
                      <td className="px-6 py-4 text-white/70 text-sm">
                        S’assurer de la méthode de collecte/validation, des contrôles et de la traçabilité.
                      </td>
                    </tr>

                    <tr className="bg-white/[0.03]">
                      <td className="px-6 py-4 font-medium text-white border-r border-white/20">
                        Logiciel avec assistance
                      </td>
                      <td className="px-6 py-4 text-white/85 border-r border-white/20">
                        Vous voulez produire en interne avec un cadre et une aide ponctuelle.
                      </td>
                      <td className="px-6 py-4 text-white/70 text-sm">
                        Temps interne requis, risques d’erreurs si les variables et les règles ne sont pas maîtrisées.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Lien texte (2/5) vers contact */}
              <div className="mt-10 flex justify-center">
                <a
                  href="#contact"
                  className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white"
                >
                  Obtenir un avis rapide
                </a>
              </div>
            </div>
          </section>

          {/* SECTION: Critères de choix (sans carte) */}
          <section className="relative z-10 pb-24 px-6 bg-transparent">
            <div className="max-w-5xl mx-auto">
              <AnimatedFadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Les critères qui comptent vraiment pour choisir
                </h2>
              </AnimatedFadeIn>

              <div className="mt-12 space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Avant de comparer des prix, clarifiez le périmètre : bulletins, DSN, entrées/sorties,
                  attestations, formalités, support, et éventuellement la reprise d’historique. C’est
                  souvent là que naissent les incompréhensions.
                </p>
                <p>
                  Ensuite, regardez la méthode de travail : comment les variables sont collectées,
                  à quelle date, quelle est la phase de validation, comment les corrections sont gérées,
                  et comment la traçabilité est assurée.
                </p>
                <p>
                  Enfin, posez une question simple : que se passe-t-il quand le mois n’est pas “standard” ?
                  Arrêt de travail, IJSS, subrogation, prime exceptionnelle, entrée/sortie, changement de contrat.
                  La qualité d’un prestataire se voit dans ces situations.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Argument phare 1 (service dédié) */}
          <section className="relative z-10 pb-24 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
              <AnimatedFadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  L’avantage d’un service dédié : un accompagnement orienté paie
                </h2>
              </AnimatedFadeIn>

              <div className="mt-10 max-w-5xl mx-auto text-white/80 text-lg leading-relaxed space-y-6">
                <p>
                  Une solution dédiée à la paie est construite autour d’un cycle mensuel : collecte,
                  production, contrôles, validation, DSN, puis archivage. L’objectif est de réduire
                  les frictions, d’éviter les zones grises, et de simplifier la prise de décision.
                </p>
                <p>
                  Pour une TPE ou une PME, cela change tout : vous n’avez pas besoin d’un dispositif lourd,
                  mais d’un cadre clair et de réponses rapides. Quand la paie est traitée comme un sujet
                  à part entière, vous gagnez en stabilité et en sérénité.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Argument phare 2 (volumes limités + qualité) */}
          <section className="relative z-10 pb-24 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
              <AnimatedFadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Une logique qualité : limiter le volume pour rester précis
                </h2>
              </AnimatedFadeIn>

              <div className="mt-10 max-w-5xl mx-auto text-white/80 text-lg leading-relaxed space-y-6">
                <p>
                  Une erreur de paie se paie rarement une seule fois : elle entraîne des régularisations,
                  des échanges, parfois des corrections DSN, et de la tension inutile. Pour réduire ce risque,
                  l’organisation compte autant que la compétence.
                </p>
                <p>
                  Chez GPE Solutions, l’idée est de conserver une capacité de contrôle réelle. Limiter le
                  volume de bulletins traités permet de garder du temps pour les vérifications, le suivi,
                  et la résolution propre des cas particuliers.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Argument ultime (paie + data) */}
          <section className="relative z-10 pb-28 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
              <AnimatedFadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Quand la paie s’appuie sur des contrôles data pour renforcer la conformité
                </h2>
              </AnimatedFadeIn>

              <div className="mt-10 max-w-5xl mx-auto text-white/80 text-lg leading-relaxed space-y-6">
                <p>
                  Au-delà des contrôles classiques d’un logiciel de paie, il est possible d’ajouter une
                  lecture “data” : repérer des anomalies récurrentes, comparer des évolutions d’un mois sur
                  l’autre, détecter des incohérences sur certaines variables, et sécuriser le dépôt DSN.
                </p>
                <p>
                  L’enjeu n’est pas de complexifier, mais de rendre la paie plus vérifiable. Cette approche
                  est particulièrement utile lorsque l’entreprise grandit, que les variables se multiplient,
                  ou que les règles conventionnelles deviennent plus exigeantes.
                </p>

                {/* CTA 2 (bouton) -> #contact (max 2 boutons) */}
                <div className="pt-4 flex justify-center">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                  >
                    Parler de votre paie
                    <span className="transition group-hover:translate-x-0,5">→</span>
                  </a>
                </div>

                {/* Lien texte (3/5) vers contact */}
                <div className="pt-2 flex justify-center">
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white"
                  >
                    Faire évaluer votre cycle mensuel
                  </a>
                </div>
              </div>
            </div>
          

          

       
          <div id="contact" className="max-w-3xl mx-auto scroll-mt-5">
  <AnimatedFadeIn>
    <h2 className="text-4xl font-bold text-white mb-2 text-center">
      Formulaire de contact
    </h2>
    ...

              <p className="text-white text-center mb-12">
                Réponse garantie{" "}
                <span className="font-semibold text-white">sous 48 heures</span>.
              </p>
            </AnimatedFadeIn>

            <AnimatedFadeIn>
              <ContactForm />
            </AnimatedFadeIn>
          </div>
        

        {/* SECTION: FAQ */}
          <div className="max-w-5xl mx-auto">
            <AnimatedFadeIn>
              <div className="text-center">
                <h2 className="mt-10 inline-block rounded-full bg-blue-900 px-8 py-3 text-2xl md:text-3xl font-bold tracking-wide text-white shadow-sm">
                  FAQ
                </h2>
              </div>
            </AnimatedFadeIn>

            <div className="mt-16 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group relative overflow-hidden rounded-xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md group-open:from-blue-100 group-open:to-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5">
                    <span className="text-lg font-semibold text-blue-950">
                      {item.q}
                    </span>

                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-blue-100/70">
                      <span className="absolute h-0.5 w-4 bg-blue-900 transition-all duration-300 group-open:rotate-180" />
                      <span className="absolute h-4 w-0.5 bg-blue-900 transition-all duration-300 group-open:opacity-0" />
                    </span>
                  </summary>

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

        {/* ✅ IMPORTANT : on ferme le wrapper ici */}
        </div>

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
