import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/header.jsx";
import Hero from "./pages/hero/hero.jsx";
import FeaComp from "./pages/featuredcompanies/featuredcompanies.jsx";
import Main from "./pages/main/main.jsx";
import Footer from "./pages/footer/footer.jsx";
import Whyus from "./pages/whyus/whyus.jsx";
import Oferta from "./pages/oferta/oferta.jsx"; // Import strony oferta
import Onas from "./pages/onas/onas.jsx"; // Import strony onas

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Whyus />
            <FeaComp />
            <Main />
          </>
        } />
        <Route path="/onas" element={<Onas />} />
        <Route path="/oferta" element={<Oferta />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
