/* eslint-disable react/prop-types */
import { useState } from "react";
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';

export default function Coollaps({ title, content }) {
    // Définir l'état initial sur true pour que arrowUp soit affiché par défaut
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div>
                <span onClick={() => setToggle(!toggle)}>
                    <h3>{title}</h3>
                    {/* Utilisation correcte des images selon l'état toggle */}
                    <img className="too" src={toggle ? arrowUp : arrowDown} alt="toggle icon" />
                </span>
                <div>
                <p className={toggle?  "displayNone" :"display"}>{content}</p>
                </div>
            </div>
        </>
    );
}
