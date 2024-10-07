import logoFooter from "../../assets/logoFooter.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer_content">
          <li className="footer_content_li">
            {" "}
            <img src={logoFooter} alt="" className="footer_content_li_logo" />
          </li>
          <li className="footer_content_li">
            © 2020 Kasa. All rights reserved
          </li>
        </ul>
      </footer>
    </>
  );
}
