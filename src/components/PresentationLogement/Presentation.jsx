/* eslint-disable react/prop-types */
export default function Presentation({
  title, // Titre de la présentation
  tags, // Tags associés à la présentation
  location, // Localisation de la présentation
}) {
  return (
    <>
      <div className="presentation_location">
        {/* Conteneur pour les informations de localisation */}
        <h1 className="presentation_location_title">{title}</h1>{" "}
        {/* Titre de la présentation */}
        <p className="presentation_location_adress">{location}</p>{" "}
        {/* Adresse de la présentation */}
        <ul className="presentation_location_tags">
          {/* Liste des tags */}
          {tags?.map(
            (
              tag // Itération sur les tags, vérifie si tags existe
            ) => (
              <li key={tag} className="tag">
                {/* Élément de liste pour chaque tag */}
                {tag} {/* Affichage du tag */}
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
