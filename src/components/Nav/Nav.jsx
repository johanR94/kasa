import { NavLink } from "react-router-dom"; // Importation de NavLink pour la navigation

export default function Nav() {
  return (
    <nav className="header_nav">
      <NavLink
        to="/" // Lien vers la page d'accueil
        className={(
          { isActive } // Fonction pour définir la classe en fonction de l'état actif
        ) => (isActive ? "header_nav_active" : "header_nav_link")}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) =>
          isActive ? "header_nav_active" : "header_nav_link"
        }
      >
        A propos
      </NavLink>
    </nav>
  );
}
