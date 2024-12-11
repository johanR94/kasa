import { useEffect } from "react";
import aboutContent from "../../Data/DataAbout.json";
import Banner from "../../Components/Banner/Banner";
import ImgBannerAbout from "../../assets/ImgBannerAbout.png";
import Main from "../../Components/Main/Main";
import Collaps from "../../Components/Collaps/Collaps";

export default function About() {
  //!-- Use effect for title
  useEffect(() => {
    document.title = "About - Kasa";
  }, []);
  return (
    <>
      <Main>
        <Banner img={ImgBannerAbout} />
        <section className="about">
          <div className="about_content">
            {aboutContent.map((item, index) => (
              <Collaps key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </section>
      </Main>
    </>
  );
}
