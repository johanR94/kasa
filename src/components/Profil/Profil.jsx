import Rates from "../Rates/Rates";

export default function Profil({ hostName, hostPicture, rating }) {
  return (
    <>
      <div className="presentation_host">
        {/* Conteneur pour les informations de l'hôte */}
        <div className="presentation_host_profil profil">
          {/* Profil de l'hôte */}
          <p className="profil_name">{hostName}</p>
          {/* Affichage du nom de l'hôte */}
          <img
            className="profil_picture"
            src={hostPicture} // Affichage de l'image de l'hôte
            alt="Photos de l'hôte" // Texte alternatif pour l'image
          />
        </div>
        <Rates rating={rating} />
        {/* Affichage de la note avec le composant Rates */}
      </div>
    </>
  );
}
