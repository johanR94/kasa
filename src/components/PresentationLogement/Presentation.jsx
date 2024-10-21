import Rates from "../Rates/Rates";

/* eslint-disable react/prop-types */
export default function Presentation({
  title,
  tags,
  location,
  hostName,
  hostPicture,
  rating,
}) {
  return (
    <>
      <section className="presentation">
        <div className="presentation_location">
          <h1 className="presentation_location_title">{title}</h1>
          <p className="presentation_location_adress">{location}</p>
          <ul className="presentation_location_tags">
            {tags?.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="presentation_host">
          <div className="presentation_host_profil profil">
            <p className="profil_name">{hostName}</p>
            <img
              className="profil_picture"
              src={hostPicture}
              alt="Photos de l'hôte"
            />
          </div>

          <Rates rating={rating} />
        </div>
      </section>
    </>
  );
}
