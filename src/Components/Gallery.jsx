import { useEffect, useState } from "react";
import { fetchLogementData } from "../Api/apiLogements";
import ErrorPage from "../Pages/Error";
import Card from "./Card";

export default function Logement() {
  const [data, setData] = useState([]); // État pour stocker les données de logement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    const getData = async () => {
      try {
        const logementData = await fetchLogementData(); // Appel à la fonction pour récupérer les données
        setData(logementData);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <section className="gallery">
        {" "}
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </>
  );
}
