import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import NavBar from "./composants/NavBar";
import Footer from "./composants/Footer";

function App() {
  return (
    <body className=" ">
      <NavBar/>

      {/* main */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListingPage />} />

        {/* ici ça me dit que le ProductListingFilferCollapsPage est introuvable */}
        {/* <Route path="/Boutique/:id" element= {<ProductListingFilferCollapsPage />} /> */}
      </Routes>
      {/* main */}

      <Footer/>
    </body>
  );
}

export default App;
