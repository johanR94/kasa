/* eslint-disable react/prop-types */
import { useState } from "react"; // Importation de useState pour gérer l'état
import arrowUp from "../../assets/arrowUp.svg"; // Importation de l'icône de flèche

export default function Coollaps({ title, content }) {
  // Définir l'état initial sur true pour que le contenu soit masqué par défaut
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="collaps">
        {" "}
        {/* Conteneur principal du composant */}
        <div className="collaps_item" onClick={() => setToggle(!toggle)}>
          {" "}
          {/* Élément cliquable pour basculer l'affichage */}
          <h2 className="collaps_item_title">{title}</h2>
          <img
            className={`collaps_item_arrow ${!toggle ? "rotate" : ""}`} // Applique la classe "rotate" si toggle est faux
            src={arrowUp}
            alt="toggle icon"
          />
        </div>
        {Array.isArray(content) ? ( // Vérifie si le contenu est un tableau
          <ul className={toggle ? "collaps_rollup" : "collaps_unrolled"}>
            {" "}
            {/* Affichage de la liste ou masquage */}
            {content.map((item) => (
              <li key={item}>{item}</li> // Élément de liste avec une clé unique
            ))}
          </ul>
        ) : (
          <p className={toggle ? "collaps_rollup" : "collaps_unrolled"}>
            {content}
          </p> // Affiche le contenu si ce n'est pas un tableau
        )}
      </div>
    </>
  );
}
