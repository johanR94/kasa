/* eslint-disable no-useless-catch */
//! Récuperation des données de logement depuis le fichier JSON
export async function fetchLogementData() {
    try {
        // Peremet de différencier la requête selon si l'url dispose d'une ID
        const url =`/src/Data/Accomodation.json`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch logement data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}


