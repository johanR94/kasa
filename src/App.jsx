import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Sass/base/style.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ErrorPage from "./Pages/Error/Error_page";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FicheLogement from "./Pages/Logement/FicheLogement";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ficheLogement/:id" element={<FicheLogement />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
