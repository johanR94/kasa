/* eslint-disable react/prop-types */
import { useState } from "react";
import arrowRight from "../Assets/arrows/arrowRight.png";
import arrowLeft from "../Assets/arrows/arrowLeft.png";

export default function Carousel({ images }) {
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
  const hideCarouselCounter = (images) => {
    return images.length <= 1 ? "none" : "";
  };

  // Si aucune image n'est disponible, afficher un message
  if (images.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  return (
    <section className="carousel">
      <img
        src={images[currentImageIndex]}
        className="carousel_picture"
        alt={`Image ${currentImageIndex + 1}`}
      />
      <div
        className="carousel_arrows arrows"
        style={{ display: hideCarouselCounter(images) }}
      >
        <img
          src={arrowLeft}
          alt="Image précédente"
          className="arrow_left"
          onClick={handlePrevImage}
        />

        <img
          src={arrowRight}
          alt="Image suivante"
          className="arrow_right"
          onClick={handleNextImage}
        />
      </div>
      <div
        className="carousel_counter"
        style={{ display: hideCarouselCounter(images) }}
      >
        {currentImageIndex + 1} / {images.length}{" "}
      </div>
    </section>
  );
}
