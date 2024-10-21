import { NavLink } from "react-router-dom"; // Importation de NavLink pour la navigation

export default function Nav() {
  return (
    <nav className="header_nav"> {/* Conteneur de navigation */}
      <NavLink
        to="/" // Lien vers la page d'accueil
        className={({ isActive }) => // Fonction pour définir la classe en fonction de l'état actif
          isActive ? "header_nav_active" : "header_nav_link" // Classe active si le lien est actif
        }
      >
        Accueil {/* Texte du lien */}
      </NavLink>
      <NavLink
        to="/About" // Lien vers la page "À propos"
        className={({ isActive }) => // Fonction pour définir la classe en fonction de l'état actif
          isActive ? "header_nav_active" : "header_nav_link" // Classe active si le lien est actif
        }
      >
        A propos {/* Texte du lien */}
      </NavLink>
    </nav>
  );
}

