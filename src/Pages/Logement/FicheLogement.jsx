import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLogementData } from '../../Api/apiLogements'; 
import Carousel from '../../components/Carousel/Carousel'; 
import Presentation from '../../components/PresentationLogement/Presentation'; 
import Collaps from '../../components/Collaps/Collaps'; 
import Coollaps from '../../components/Collaps/Coollaps'; 
import Main from "../../components/Main/Main"


const FicheLogement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchLogementData();
                const logementDetails = data.find(item => item.id === id);
                setLogement(logementDetails);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };
        fetchData();
    }, [id]);

    if (!logement) {
        return <div>Chargement...</div>;
    }

    

    return (
        <Main>
           < Carousel images={logement.pictures}/>
           <Presentation 
            title={logement.title} 
            tags={logement.tags}
            location={logement.location}
            hostName={logement.host.name}
            hostPicture={logement.host.picture}
            rating={logement.rating}/>
           <Collaps 
           description={logement.description}
           equipments={logement.equipments}/>
        <Coollaps 
        title={'Description'}
        content={logement.description}/>
     
        </Main>
    );
};

export default FicheLogement;
