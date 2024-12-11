/* eslint-disable react/prop-types */
import orangeStars from "../assets/orangeStars.svg";
import greyStars from "../assets/greyStars.svg";

export default function Rates({ rating }) {
  return (
    <>
      <div className="presentation_host_rate">
        {[...Array(5)].map((star, index) => {
          const logementRate = index + 1;
          return (
            <img
              className="presentation_host_rate--star"
              key={index}
              src={logementRate <= rating ? orangeStars : greyStars} // Choix de l'image d'étoile en fonction de la note
              alt="star"
            />
          );
        })}
      </div>
    </>
  );
}
