// import React from "react"
import { Heart } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Button } from "./composants/Button";
import Container from "./composants/Container";
import { MoveRight } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { menuLists } from "./types/fichier";

import { CardList } from "./data/categorie";



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
                  <a href={menu.url}>{menu.name}</a>
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
      <main>
        {/* hero section */}
        <section className="container max-w-7xl mx-auto mt-5">
          <Container className="relative flex items-center bg-gray-100 justify-center gap-6 px-8">
            <div className="relative flex flex-col items-start w-1/2 gap-4">
              <p className="text-lg text-gray-600">
                Des styles uniques pour tous les goûts
              </p>
              <h1 className="text-5xl font-bold">
                Découvrez notre collection de vêtements tendance
              </h1>
              <p className="text-lg text-gray-600">Plus de 50% de réduction</p>
              <Button variant="primary" className="gap-1">
                <p>Shop Now</p>
                <MoveRight />
              </Button>
              <p className="absolute top-40 left-25 text-[13rem] font-extrabold text-gray-50">
                BEST
              </p>
            </div>
            <img
              src="/img/Quiet Luxury Weekend Style _ Men's Smart Casual Outfit.jpeg"
              alt=""
              className="absolte w-1/3 rounded-2xl"
            />
          </Container>
        </section>

        {/* section catégorie */}
        <section className="container max-w-7xl mx-auto mt-15">
          <Container>
            <div className="flex justify-between">
              <p className="text-5xl font-bold">Nos Catégories</p>
              <div className="flex gap-4">
                <Button variant="secondary" className="py-4 px-4">
                  <MoveLeft />
                </Button>
                <Button variant="primary" className="py-4 px-4">
                  <MoveRight />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-10 ">
              {/* {CardList.map((card, index) => (
                <Card key={index} {...card} />
              ))} */}

              {CardList.map((card, index) => (
                <Card key={index} buttonText={card.buttonText} image={card.image} />
              ))}
            </div>
          </Container>
        </section>

        <section className="mt-50">
          <Container>
            <div className="flex items-center justify-center">
              <p className="text-5xl font-bold">Nos meilleures ventes</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10 ">
              <div className="bg-white rounded-2xl p-4">
                <img
                  src="/src/img/costumes.jpeg"
                  alt=""
                  className="rounded-2xl mb-4"
                />
                <p className="text-lg font-bold">Costume Classique</p>
                <p className="text-md text-gray-400">100% coton</p>
                <div className="flex gap-2">
                  <p className="text-gray-600">179.99 CFA</p>
                  <p className="text-gray-400  line-through">200.99 CFA</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4">
                <img
                  src="/src/img/Complet Tunique Homme.jpeg"
                  alt=""
                  className="rounded-2xl mb-4"
                />
                <p className="text-lg font-bold">Costume Moderne</p>
                <p className="text-md text-gray-400">100% coton</p>
                <div className="flex gap-2">
                  <p className="text-gray-600">179.99 CFA</p>
                  <p className="text-gray-400  line-through">200.99 CFA</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4">
                <img
                  src="/src/img/Broderie Homme.jpeg"
                  alt=""
                  className="rounded-2xl mb-4"
                />
                <p className="text-lg font-bold">Costume Élégant</p>
                <p className="text-md text-gray-400">100% coton</p>
                <div className="flex gap-2">
                  <p className="text-gray-600">179.99 CFA</p>
                  <p className="text-gray-400  line-through">200.99 CFA</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4">
                <img
                  src="/src/img/Boubou Africain Homme.jpeg"
                  alt=""
                  className="rounded-2xl mb-4"
                />
                <p className="text-lg font-bold">Costume Décontracté</p>
                <p className="text-md text-gray-400">100% coton</p>
                <div className="flex gap-2">
                  <p className="text-gray-600">179.99 CFA</p>
                  <p className="text-gray-400  line-through">200.99 CFA</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4">
                <img
                  src="/src/img/BENYAR Mens Watches Quartz Chronograph Business Luxury Brand Waterproof Wristwatches Fashion Brown Leather Watches for Men.jpeg"
                  alt=""
                  className="rounded-2xl mb-4"
                />
                <p className="text-lg font-bold">Costume Décontracté</p>
                <p className="text-md text-gray-400">100% coton</p>
                <div className="flex gap-2">
                  <p className="text-gray-600">179.99 CFA</p>
                  <p className="text-gray-400  line-through">200.99 CFA</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4">
                <img
                  src="/src/img/2023 Nova Chegada De Sandálias Casuais Masculinas Da Moda.jpeg"
                  alt=""
                  className="rounded-2xl mb-4"
                />
                <p className="text-lg font-bold">Costume Décontracté</p>
                <p className="text-md text-gray-400">100% coton</p>
                <div className="flex gap-2">
                  <p className="text-gray-600">179.99 CFA</p>
                  <p className="text-gray-400  line-through">200.99 CFA</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4">
                <img
                  src="/src/img/Modèle Super Cent Homme.jpeg"
                  alt=""
                  className="rounded-2xl mb-4"
                />
                <p className="text-lg font-bold">Costume Décontracté</p>
                <p className="text-md text-gray-400">100% coton</p>
                <div className="flex gap-2">
                  <p className="text-gray-600">179.99 CFA</p>
                  <p className="text-gray-400  line-through">200.99 CFA</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4">
                <img
                  src="/src/img/SHUZIA Women's Boston Clog Wide Fit Burgundy Slip On Mule Holiday Vacay Vibe For And Summer Shoes Spring Shoes Spring Break Easter.jpeg"
                  alt=""
                  className="rounded-2xl mb-4"
                />
                <p className="text-lg font-bold">Costume Décontracté</p>
                <p className="text-md text-gray-400">100% coton</p>
                <div className="flex gap-2">
                  <p className="text-gray-600">179.99 CFA</p>
                  <p className="text-gray-400  line-through">200.99 CFA</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </body>
  );
}

export default App;
