/* eslint-disable no-useless-catch */
// Extrait de apiLogement.js
export async function fetchLogementData(id = null) {
    try {
        const url = id ? `/logement/${id}` : `/logement.json`;
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


