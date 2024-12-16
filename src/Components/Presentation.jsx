/* eslint-disable react/prop-types */
export default function Presentation({
  title, // Titre de la présentation
  tags, // Tags associés à la présentation
  location, // Localisation de la présentation
}) {
  return (
    <div className="presentation_location">
      <h1 className="presentation_location_title">{title}</h1>{" "}
      <p className="presentation_location_adress">{location}</p>{" "}
      <ul className="presentation_location_tags">
        {tags?.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
