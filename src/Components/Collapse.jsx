/* eslint-disable react/prop-types */
import { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";

export default function Coollaps({ title, content }) {
  // Définir l'état initial sur true pour que le contenu soit masqué par défaut
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="collaps">
        {" "}
        <div className="collaps_item" onClick={() => setToggle(!toggle)}>
          {" "}
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
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className={toggle ? "collaps_rollup" : "collaps_unrolled"}>
            {content}
          </p>
        )}
      </div>
    </>
  );
}
