import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="header_nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "header_nav_active" : "header_nav_link"
        }
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
