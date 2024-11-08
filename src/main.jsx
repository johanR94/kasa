import React from "react"; // Importation de la bibliothèque React
import ReactDOM from "react-dom/client"; // Importation de ReactDOM pour le rendu dans le DOM
import App from "./App.jsx"; // Importation du composant principal de l'application

// Création de la racine pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application dans le DOM
root.render(
  <React.StrictMode>
    <App /> {/* Affichage du composant App */}
  </React.StrictMode>
);
