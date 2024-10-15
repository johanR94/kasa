import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import ImgBannerHome from "../../assets/ImgBannerAbout.png";
import Main from "../../components/Main/Main";
import Coollaps from "../../components/Collaps/Coollaps";

export default function About() {
    useEffect(() => {
        document.title = "About - Kasa";
      }, [])
    const aboutContent = [
        {
            title: 'Fiabilité',
            content:
                'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        },
        {
            title: 'Respect',
            content:
                'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            title: 'Service',
            content:
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            title: 'Sécurité',
            content:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];

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