import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importation des composants de routage
import "./Sass/base/style.css"; // Importation des styles CSS
import Home from "./Pages/Home/Home"; // Importation de la page d'accueil
import About from "./Pages/About/About"; // Importation de la page "À propos"
import ErrorPage from "./Pages/Error/Error"; // Importation de la page d'erreur
import Footer from "./Components/Footer"; // Importation du composant Footer
import Header from "./Components/Header"; // Importation du composant Header
import Accomodation from "./Pages/Accomodation/Accomodation"; // Importation de la page de détails du logement

// Composant de mise en page pour envelopper le Header et le Footer autour des enfants
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header /> {/* Affichage du Header */}
      {children} {/* Affichage des enfants (les routes) */}
      <Footer /> {/* Affichage du Footer */}
    </>
  );
}

function App() {
  return (
    <Router>
      {" "}
      {/* Configuration du Router pour gérer la navigation */}
      <div className="app">
        {" "}
        {/* Conteneur principal de l'application */}
        <Layout>
          {" "}
          {/* Utilisation du composant Layout pour l'en-tête et le pied de page */}
          <Routes>
            {" "}
            {/* Définition des routes de l'application */}
            <Route path="/" element={<Home />} />{" "}
            {/* Route pour la page d'accueil */}
            <Route path="/about" element={<About />} />{" "}
            {/* Route pour la page "À propos" */}
            <Route path="/accomodation/:id" element={<Accomodation />} />{" "}
            {/* Route pour la page de détails du logement avec ID dynamique */}
            <Route path="*" element={<ErrorPage />} />{" "}
            {/* Route de secours pour les URL non trouvées */}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App; // Exportation du composant App
