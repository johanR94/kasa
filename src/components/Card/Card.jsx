import { Link } from "react-router-dom"; // Importation du composant Link pour la navigation

// eslint-disable-next-line react/prop-types
export default function Card({ id, title, cover }) {
  return (
    <article key={id} className="card"> {/* Élément article pour chaque carte, avec une clé unique */}
      <Link to={`/FicheLogement/${id}`} className="card_link">  {/* Lien vers la fiche logement en utilisant l'ID */}
        <img src={cover} alt={title} className="card_img" loading="lazy" /> {/* Affichage de l'image avec chargement paresseux */}
        <span className="card_title"> {title} </span> {/* Affichage du titre du logement */}
      </Link>
    </article>
  );
}

