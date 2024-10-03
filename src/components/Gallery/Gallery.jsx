import { useEffect, useState } from "react";
import { fetchLogementData } from '../../Api/apiLogements'; 
import ErrorPage from "../../Pages/Error/Error_page";
import Card from "../Card/Card";


export default function Logement() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const logementData = await fetchLogementData();
                setData(logementData);
            } catch (error) {
                setError(error.message);
            }
        };

        getData();
    }, []);

    if (error) {
        return <ErrorPage/>;
    }

    return (
        <>
        <section className="gallery">
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