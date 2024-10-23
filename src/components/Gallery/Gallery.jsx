import { useEffect, useState } from "react"; // Importation des hooks useEffect et useState
import { fetchLogementData } from "../../Api/apiLogements"; // Importation de la fonction pour récupérer les données de logement
import ErrorPage from "../../Pages/Error/Error_page"; 
import Card from "../Card/Card"; 

export default function Logement() {
  const [data, setData] = useState([]); // État pour stocker les données de logement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    // Hook pour exécuter le code lors du premier rendu
    const getData = async () => {
      try {
        const logementData = await fetchLogementData(); // Appel à la fonction pour récupérer les données
        setData(logementData); 
      } catch (error) {
        setError(error.message); 
      }
    };

    getData(); // Appel de la fonction pour récupérer les données
  }, []); 

  if (error) {
    return <ErrorPage />; // Affiche la page d'erreur si une erreur est survenue
  }

  return (
    <>
      <section className="gallery"> {/* Conteneur principal pour afficher la galerie de logements */}
        {data.map((logement) => ( 
          <Card
            key={logement.id} // Utilisation de l'ID comme clé unique pour chaque Card
            id={logement.id} // Passage de l'ID au composant Card
            title={logement.title} // Passage du titre au composant Card
            cover={logement.cover} // Passage de l'image de couverture au composant Card
          />
        ))}
      </section>
    </>
  );
}
