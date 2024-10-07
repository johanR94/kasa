import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="header_nav">
      <Link to="/">
        {" "}
        <button className="header_nav_link">Accueil</button>
      </Link>
      <Link to="/About">
        {" "}
        <button className="header_nav_link">A propos</button>
      </Link>
    </nav>
  );
}
