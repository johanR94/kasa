/* eslint-disable react/prop-types */
import { useState } from "react";
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';

export default function Coollaps({ title, content }) {
    // Définir l'état initial sur true pour que arrowUp soit affiché par défaut
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div className="collaps">
                <div className="collaps_item" onClick={() => setToggle(!toggle)}>
                    <h3 className="collaps_item_title">{title}</h3>
                    {/* Utilisation correcte des images selon l'état toggle */}
                    <img className="collaps_item_arrow" src={toggle ? arrowUp : arrowDown} alt="toggle icon" />
                </div>
                <div>
                {Array.isArray(content) ? (
                        <ul className={toggle ? "displayNone" : "display"}>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className={toggle ? "displayNone" : "display"}>{content}</p>
                    )}
                </div>
            </div>
        </>
    );
}
