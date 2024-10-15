import { useEffect } from "react";
import Banner from "../../components/Banner/Banner"
import ImgBannerHome from "../../assets/ImgBannerHome.png"
import Gallery from "../../components/Gallery/Gallery"
import Main from "../../components/Main/Main"
export default function Home(){

    useEffect(() => {
        document.title = "Home - Kasa";
      }, [])
    return (
        
        <Main>
            <Banner title="Chez vous, partout et ailleurs" img={ImgBannerHome}/>
            <Gallery/>
        </Main> 
        
    )
   
}