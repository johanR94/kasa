import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importez useNavigate
import { fetchLogementData } from "../Api/apiLogements";
import Carousel from "../Components/Carousel";
import Presentation from "../Components/Presentation";
import Collaps from "../Components/Collapse";
import Main from "../Components/Main";
import Profil from "../Components/Profil";

export default function Accomodation() {
  useEffect(() => {
    document.title = "Logement - Kasa";
  }, []);

  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(false); // État pour gérer les erreurs
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLogementData();
        const logementDetails = data.find((item) => item.id === id);
        if (!logementDetails) {
          setError(true); // Si aucun logement n'est trouvé
        } else {
          setLogement(logementDetails);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        setError(true); // Gérer les erreurs d'appel API
      }
    };
    fetchData();
  }, [id]);

  //Renvoie la page d'erreur
  useEffect(() => {
    if (error) {
      navigate("/Error");
    }
  }, [error, navigate]);

  // Affiche un message de chargement si les données du logement ne sont pas encore disponibles
  if (!logement) {
    return <div>Chargement...</div>;
  }
  // Rendu du composant une fois que les données du logement sont disponibles
  return (
    <Main>
      <Carousel images={logement.pictures} />
      <section className="presentation">
        <Presentation
          title={logement.title}
          tags={logement.tags}
          location={logement.location}
        />
        <Profil
          hostName={logement.host.name}
          hostPicture={logement.host.picture}
          rating={parseInt(logement.rating)}
        />
      </section>
      <div className="deroulant">
        <Collaps title={"Description"} content={logement.description} />
        <Collaps title={"Équipements"} content={logement.equipments} />
      </div>
    </Main>
  );
}
