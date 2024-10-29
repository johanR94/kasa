import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLogementData } from "../../Api/apiLogements";
import Carousel from "../../components/Carousel/Carousel";
import Presentation from "../../components/PresentationLogement/Presentation";
import Coollaps from "../../components/Collaps/Coollaps";
import Main from "../../components/Main/Main";
const FicheLogement = () => {
  // Met à jour le titre du document lorsque le composant est monté
  useEffect(() => {
    document.title = "Logement - Kasa";
  }, []);

  // Récupère l'identifiant du logement à partir des paramètres de l'URL
  const { id } = useParams();
  const [logement, setLogement] = useState(null); // État pour stocker les détails du logement

  // Effet pour récupérer les données du logement en fonction de l'identifiant
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLogementData(); // Appel à la fonction pour récupérer les données
        // Recherche le logement correspondant à l'identifiant
        const logementDetails = data.find((item) => item.id === id);
        setLogement(logementDetails); // Met à jour l'état avec les détails du logement
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error); // Gestion des erreurs
      }
    };
    fetchData(); // Appel de la fonction pour récupérer les données
  }, [id]); // Dépendance sur l'identifiant pour relancer l'effet si nécessaire

  // Affiche un message de chargement si les données du logement ne sont pas encore disponibles
  if (!logement) {
    return <div>Chargement...</div>;
  }

  // Rendu du composant une fois que les données du logement sont disponibles
  return (
    <Main>
      <Carousel images={logement.pictures} /> {/* Affiche le carousel d'images */}
      <Presentation
        title={logement.title} // Titre du logement
        tags={logement.tags} // Étiquettes du logement
        location={logement.location} // Localisation du logement
        hostName={logement.host.name} // Nom de l'hôte
        hostPicture={logement.host.picture} // Photo de l'hôte
        rating={logement.rating} // Note du logement
      />
      <div className="deroulant">
        {/* Affiche les sections "Description" et "Équipements" avec des contenus déroulants */}
        <Coollaps title={"Description"} content={logement.description} />
        <Coollaps title={"Équipements"} content={logement.equipments} />
      </div>
    </Main>
  );
};

export default FicheLogement;