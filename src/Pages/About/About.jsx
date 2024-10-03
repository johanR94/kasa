import Banner from "../../components/Banner/Banner"
import ImgBannerHome from "../../assets/ImgBannerAbout.png"
import Main from "../../components/Main/Main"

export default function about(){

    return (
        <>
        <Main>
        <Banner  img={ImgBannerHome}/>
            <p>lola</p>
        </Main>
        </>
    )
}