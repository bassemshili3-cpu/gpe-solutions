export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900">
          Mentions légales
        </h1>

        <section className="mt-10 space-y-6 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-gray-900">
            Éditeur du site
          </h2>
          <p>
            Le présent site est édité sous le nom commercial <strong>GPE Solutions</strong>.
          </p>
          <ul className="list-disc pl-5">
            <li>Régime: Micro-entreprise</li>
            <li>Société: GPE Solutions</li>
            <li>Adresse du siège social : 27 rue de Plaisance, 42400 Saint-Chamond</li>
            <li>Numéro SIREN : 884808205 </li>
            <li>Email : contact@gpe-solutions.fr</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900">
            Directeur de la publication
          </h2>
          <p>
            Le directeur de la publication est : <strong>MR SHILI Bassem</strong>.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">
            Hébergement
          </h2>
          <p>
            Le site est hébergé par : Société Vercel
          </p>
          <ul className="list-disc pl-5">
            <li>Nom de l’hébergeur : Vercel</li>
            <li>Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789</li>
            <li>Téléphone : (559) 288-7060</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900">
            Propriété intellectuelle
          </h2>
          <p>
            L’ensemble des contenus présents sur le site (textes, visuels, structure)
            est protégé par le droit de la propriété intellectuelle. Toute reproduction
            ou utilisation sans autorisation est interdite.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">
            Responsabilité
          </h2>
          <p>
            GPE Solutions s’efforce de fournir des informations exactes et à jour.
            Toutefois, aucune garantie n’est donnée quant à l’exhaustivité ou
            l’exactitude des contenus.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">
            Droit applicable
          </h2>
          <p>
            Le présent site est soumis au droit français. Tout litige relève de la
            compétence des juridictions françaises.
          </p>
        </section>
      </div>
    </main>
  );
}
