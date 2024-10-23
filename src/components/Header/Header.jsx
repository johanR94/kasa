import logoHeader from "../../assets/logoHeader.svg";
import Nav from "../Nav/Nav.jsX";

export default function Header() {
  return (
    <header className="header">
      <img className="header_logo" src={logoHeader} alt="Logo kasa"/>
      <Nav />
    </header>
  );
}
