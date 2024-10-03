import {BrowserRouter as  Router, Route,Routes} from "react-router-dom"

import './Sass/base/style.css'
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import ErrorPage from "./Pages/Error/Error_page"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import FicheLogement from './Pages/Logement/FicheLogement'



 function App() {

  return (
      <Router >
        <div className="app">
        <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About/>} /> 
            <Route path='/FicheLogement/:id' element={<FicheLogement/>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        <Footer />
        </div>
      </Router>

  )
}

 
export default App