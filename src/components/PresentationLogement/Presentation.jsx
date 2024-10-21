import Rates from "../Rates/Rates"; // Importation du composant Rates pour afficher la note

/* eslint-disable react/prop-types */
export default function Presentation({
  title, // Titre de la présentation
  tags, // Tags associés à la présentation
  location, // Localisation de la présentation
  hostName, // Nom de l'hôte
  hostPicture, // Photo de l'hôte
  rating, // Note de la présentation
}) {
  return (
    <>
      <section className="presentation"> {/* Conteneur principal de la présentation */}
        <div className="presentation_location"> {/* Conteneur pour les informations de localisation */}
          <h1 className="presentation_location_title">{title}</h1> {/* Titre de la présentation */}
          <p className="presentation_location_adress">{location}</p> {/* Adresse de la présentation */}
          <ul className="presentation_location_tags"> {/* Liste des tags */}
            {tags?.map((tag) => ( // Itération sur les tags, vérifie si tags existe
              <li key={tag} className="tag"> {/* Élément de liste pour chaque tag */}
                {tag} {/* Affichage du tag */}
              </li>
            ))}
          </ul>
        </div>
        <div className="presentation_host"> {/* Conteneur pour les informations de l'hôte */}
          <div className="presentation_host_profil profil"> {/* Profil de l'hôte */}
            <p className="profil_name">{hostName}</p> {/* Affichage du nom de l'hôte */}
            <img
              className="profil_picture"
              src={hostPicture} // Affichage de l'image de l'hôte
              alt="Photos de l'hôte" // Texte alternatif pour l'image
            />
          </div>

          <Rates rating={rating} /> {/* Affichage de la note avec le composant Rates */}
        </div>
      </section>
    </>
  );
}
