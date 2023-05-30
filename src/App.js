import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./componentes/Header";
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contacto from "./pages/Contacto";


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
