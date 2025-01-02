import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importation des composants de routage
import "./Sass/base/style.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Accomodation from "./Pages/Accomodation";
import Layout from "./Components/Layout";

// Composant de mise en page pour envelopper le Header et le Footer autour des enfants
// eslint-disable-next-line react/prop-types

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accomodation/:id" element={<Accomodation />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
