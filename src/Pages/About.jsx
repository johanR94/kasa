import { useEffect } from "react";
import aboutContent from "../Data/About.json";
import Banner from "../Components/Banner";
import ImgBannerAbout from "../Assets/ImgBannerAbout.png";
import Main from "../Components/Main";
import Collaps from "../Components/Collapse";

export default function About() {
  //!-- Use effect for title
  useEffect(() => {
    document.title = "About - Kasa";
  }, []);
  return (
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
  );
}
