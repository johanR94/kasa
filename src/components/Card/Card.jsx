import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card({ id, title, cover }) {
  return (
    <article key={id} className="card">
      <Link to={`/FicheLogement/${id}`} className="card_link">
        <img src={cover} alt={title} className="card_img" loading="lazy" />
        <span className="card_title"> {title} </span>
      </Link>
    </article>
  );
}
