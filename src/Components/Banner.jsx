// eslint-disable-next-line react/prop-types
export default function Banner({ img, title }) {
  return (
    <>
      <div className="banner">
        <img src={img} alt="" className="banner_img" />
        <span className="banner_text">{title}</span>
      </div>
    </>
  );
}
