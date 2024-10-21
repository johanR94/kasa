/* eslint-disable react/prop-types */
import { useState } from "react";
import arrowUp from "../../assets/arrowUp.svg";

export default function Coollaps({ title, content }) {
  // Définir l'état initial sur true pour que arrowUp soit affiché par défaut
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="collaps">
        <div className="collaps_item" onClick={() => setToggle(!toggle)}>
          <h2 className="collaps_item_title">{title}</h2>
          <img
            className={`collaps_item_arrow ${!toggle ? "rotate" : ""}`}
            src={arrowUp}
            alt="toggle icon"
          />
        </div>
        {Array.isArray(content) ? (
          <ul className={toggle ? "displayNone" : "display"}>
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className={toggle ? "displayNone" : "display"}>{content}</p>
        )}
      </div>
    </>
  );
}
