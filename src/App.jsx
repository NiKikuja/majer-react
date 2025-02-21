import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/header.jsx";
import Hero from "./pages/hero/hero.jsx";
import FeaComp from "./pages/featuredcompanies/featuredcompanies.jsx";
import Main from "./pages/main/main.jsx";
import Footer from "./pages/footer/footer.jsx";
import Whyus from "./pages/whyus/whyus.jsx";
import Oferta from "./pages/oferta/oferta.jsx";
import Onas from "./pages/onas/onas.jsx";
import ProductPage from "./pages/product/ProductPage.jsx";

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
        <Route path="/produkt/:id" element={<ProductPage />} />
        {/* Jeśli użytkownik wejdzie na nieznaną stronę, przekieruj go na stronę główną */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
