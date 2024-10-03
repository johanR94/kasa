import Banner from "../../components/Banner/Banner"
import ImgBannerHome from "../../assets/ImgBannerHome.png"
import Gallery from "../../components/Gallery/Gallery"
import Main from "../../components/Main/Main"
export default function Home(){
    return (
        
        <Main>
            <Banner title="Chez vous, partout et ailleurs" img={ImgBannerHome}/>
            <Gallery/>
        </Main> 
        
    )
   
}