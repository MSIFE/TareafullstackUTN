import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.css"


import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contacto from "./pages/Contacto";
import Novedades from "./pages/Novedades";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
