/* eslint-disable react/prop-types */
import orangeStars from "../../assets/orangeStars.svg"; // Importation de l'image des étoiles orange
import greyStars from "../../assets/greyStars.svg"; // Importation de l'image des étoiles grises

export default function Rates({ rating }) {
  return (
    <>
      <div className="presentation_host_rate">
        {[...Array(5)].map((star, index) => {
          // Création d'un tableau de 5 éléments pour les étoiles
          const logementRate = index + 1; // Calcul de la note pour chaque étoile (1 à 5)
          return (
            <img
              className="presentation_host_rate--star" // Classe CSS pour l'image de l'étoile
              key={index} // Clé unique pour chaque élément de la liste
              src={logementRate <= rating ? orangeStars : greyStars} // Choix de l'image d'étoile en fonction de la note
              alt="star" // Texte alternatif pour l'image
            />
          );
        })}
      </div>
    </>
  );
}
