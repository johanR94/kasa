// eslint-disable-next-line react/prop-types
export default function Banner({ img, title }) {
  return (
    <>
      <div className="banner"> {/* Conteneur principal de la bannière */}
        <img src={img} alt="" className="banner_img" /> {/* Affichage de l'image de la bannière */}
        <span className="banner_text">{title}</span> {/* Affichage du titre de la bannière */}
      </div>
    </>
  );
}

