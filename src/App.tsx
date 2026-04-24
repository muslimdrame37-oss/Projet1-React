// import React from "react"
import { Heart, Mail, MapPin, PhoneForwarded } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Button } from "./composants/Button";
import Container from "./composants/Container";
import { MoveRight } from "lucide-react";
import { menuLists } from "./types/fichier";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { paymentCardLogo } from "./data/PaymentCardLogo";
import { mesPages } from "./data/mesPages";
import { information } from "./data/information";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";

function App() {
  return (
    <body className=" ">
      <header className="container mx-auto px-4 py-8 shadow-md">
        <Container className="flex justify-between items-center">
          <img src="/img/Logo + Text.png" alt="" width={140} />

          <nav>
            <ul className="flex gap-4">
              {menuLists.map((menu, index) => (
                <li key={index}>
                  <Link to={menu.url}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Heart size={24} />
            <Search size={24} />
            <ShoppingBag size={24} />
            <Button variant="primary" className="ml-4">
              Login
            </Button>
          </div>
        </Container>
      </header>

      {/* main */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Boutique" element={<ProductListingPage />} />

        {/* ici ça me dit que le ProductListingFilferCollapsPage est introuvable */}
        {/* <Route path="/Boutique/:id" element= {<ProductListingFilferCollapsPage />} /> */}
      </Routes>
      {/* main */}

      <footer className="flex flex-col items-center justify-between bg-black h-100 mt-30 pt-15">
        <Container>
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col items-start gap-3 text-sm">
              <div className="flex items-center justify-center w-40 h-20 bg-white rounded-2xl px-2 mb-5">
                <img src="/img/Logo + Text.png" alt="" />
              </div>
              <div className="flex items-center justify-center gap-2 text-white">
                <PhoneForwarded size={20} />
                <p>(+221) 77777777</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white">
                <Mail size={20} />
                <p>ventout@exemple.com</p>
              </div>
              <div className="flex items-start text-white  gap-2">
                <MapPin size={20} />
                <p>89, route du front de terre, Dakar, Sénégal</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-white font-extrabold text-3xl">Mes Pages</h2>
              {mesPages.map((page, index) => (
                <div key={index}>
                  <h2 className="text-white">
                    <Link to="">{page.titre}</Link>
                  </h2>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-white font-extrabold text-3xl">
                Informations
              </h2>
              {information.map((page, index) => (
                <div key={index}>
                  <h2 className="text-white">
                    <Link to="">{page.titre}</Link>
                  </h2>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 text-white">
              <h2 className="text-white font-extrabold text-3xl">
                Souscription
              </h2>
              <p>
                Inscrivez-vous à notre newsletter pour recevoir les dernières
                actualités et offres.
              </p>
              <div className="flex items-center justify-start px-2 border rounded-lg">
                <Mail size={20} />
                <input
                  type="text"
                  id="email"
                  placeholder="Entrez votre email"
                  className=" px-3 py-3"
                />
                <MoveRight />
              </div>
            </div>
          </div>
        </Container>
        <Container className=" shadow-[0_-5px_5px_rgba(255,255,255,0.2)]">
          <div className="flex items-center justify-between w-full text-white py-4">
            <div className="flex gap-2">
              {paymentCardLogo.map((logo, index) => (
                <div key={index}>
                  <img
                    src={logo.image}
                    alt=""
                    className="w-15 px-1 py-1 h-8 bg-white rounded-sm"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              &copy; 2024 Ventout. Tous droits réservés. Conçu par{" "}
              <strong>Muslim DRAMÉ</strong>.
            </div>
            <div className="flex gap-4">
              <FaFacebookF size={20} />
              <FaInstagram size={20} />
              <FaTwitter size={20} />
            </div>
          </div>
        </Container>
      </footer>
    </body>
  );
}

export default App;
