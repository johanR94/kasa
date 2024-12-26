import Rates from "../Components/Rates";
import PropTypes from "prop-types";

export default function Profil({ hostName, hostPicture, rating }) {
  return (
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
  );
}

Profil.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
