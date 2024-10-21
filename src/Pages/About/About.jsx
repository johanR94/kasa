import { useEffect } from "react";
import { aboutContent } from "../../Data/dataAbout";
import Banner from "../../components/Banner/Banner";
import ImgBannerHome from "../../assets/ImgBannerAbout.png";
import Main from "../../components/Main/Main";
import Coollaps from "../../components/Collaps/Coollaps";

export default function About() {
  //!-- Use effect for title
  useEffect(() => {
    document.title = "About - Kasa";
  }, []);

  return (
    <>
      <Main>
        <Banner img={ImgBannerHome} />
        <section className="about">
          <div className="about_content">
            {aboutContent.map((item, index) => (
              <Coollaps key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </section>
      </Main>
    </>
  );
}
