import { useEffect } from "react";
import Banner from "../Components/Banner";
import ImgBannerHome from "../assets/ImgBannerHome.png";
import Gallery from "../Components/Gallery";
import Main from "../Components/Main";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Kasa";
  }, []);

  return (
    <Main>
      <Banner title="Chez vous, partout et ailleurs" img={ImgBannerHome} />
      <Gallery />
    </Main>
  );
}
