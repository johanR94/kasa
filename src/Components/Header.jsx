import logoHeader from "../assets/logoHeader.svg";
import Nav from "../Components/Nav";

export default function Header() {
  return (
    <header className="header">
      <img className="header_logo" src={logoHeader} alt="Logo kasa" />
      <Nav />
    </header>
  );
}
