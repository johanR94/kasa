/* eslint-disable react/prop-types */
import { useState } from "react";
import arrowRight from "../../assets/arrows/arrowRight.png";
import arrowLeft from "../../assets/arrows/arrowLeft.png";

const Carousel = ({ images }) => {
  // État pour l'index de l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour revenir à l'image précédente
  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Fonction pour masquer le compteur si une seule image
  function HideCarouselCounter(images) {
    return images.length <= 1 ? "none" : ""; // Retourne "none" si une seule image
  }

  // Si aucune image n'est disponible, afficher un message
  if (images.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  return (
    <section className="carousel">
      {/* Affichage de l'image actuelle */}
      <img
        src={images[currentImageIndex]}
        className="carousel_picture"
        alt={`Image ${currentImageIndex + 1}`}
      />
      <div
        className="carousel_arrows arrows"
        style={{ display: HideCarouselCounter(images) }} // Affichage des flèches selon le nombre d'images
      >
        {/* Flèche gauche pour l'image précédente */}
        <img
          src={arrowLeft}
          alt="Image précédente"
          className="arrow_left"
          onClick={handlePrevImage} // Appel de la fonction pour revenir à l'image précédente
        />
        {/* Flèche droite pour l'image suivante */}
        <img
          src={arrowRight}
          alt="Image suivante"
          className="arrow_right"
          onClick={handleNextImage} // Appel de la fonction pour passer à l'image suivante
        />
      </div>
      <div
        className="carousel_counter"
        style={{ display: HideCarouselCounter(images) }} // Affichage du compteur selon le nombre d'images
      >
        {currentImageIndex + 1} / {images.length}{" "}
        {/* Affichage de l'index et du total d'images */}
      </div>
    </section>
  );
};

export default Carousel;
