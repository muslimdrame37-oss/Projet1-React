// import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ProductListingPage from "./pages/ProductListingPage";
// import NavBar from "./composants/NavBar";
// import Footer from "./composants/Footer";
import SectionHero from "./composants/SectionHero";
import SectionCategorie from "./composants/SectionCategorie";
import SectionProdcut from "./composants/SectionProdcut";
import SectionPromo from "./composants/SectionPromo";
import SectionTemoignage from "./composants/SectionTemoignage";
import SectionSocialMedia from "./composants/SectionSocialMedia";
import SectionService from "./composants/SectionService";
import NavBar from "./composants/NavBar";
import Footer from "./composants/Footer";

function App() {
  return (
    <body>
      <NavBar />
      <main>
        {/* hero section */}
        <SectionHero />
        {/* section catégorie */}
        <SectionCategorie />

        {/* section product */}
        <SectionProdcut />

        {/* section promo */}
        <SectionPromo />

        {/* section témoignage */}
        <SectionTemoignage />

        {/* section social media */}
        <SectionSocialMedia />

        {/* section service */}
        <SectionService />
      </main>
      <Footer />
    </body>
  );
}

export default App;
