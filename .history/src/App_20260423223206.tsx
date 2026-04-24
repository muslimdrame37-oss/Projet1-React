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
import Card from "./composants/categoryCard";
import { productList } from "./data/products";

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
                <Card
                  key={index}
                  buttonText={card.buttonText}
                  image={card.image}
                />
              ))}
            </div>
          </Container>
        </section>

        <section className="mt-20">
          <Container>
            <div className="flex items-center justify-center">
              <p className="text-5xl font-bold">Nos meilleures ventes</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {productList.map((produit, index) => (
                <div key={index} className="rounded-2xl bg-white p-4 shadow-md">
                  <img
                    src={produit.image}
                    alt={produit.title}
                    className="mb-4 h-90 w-full rounded-2xl object-cover"
                  />
                  <h2 className="text-xl font-semibold">{produit.title}</h2>
                  <p className="text-gray-500">{produit.categorie}</p>
                  <p className="mt-2 text-lg font-bold">{produit.price}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="mt-20">
          <Container> 
            <div>
              <h2 className="text-5xl font-bold">L'affaire du mois</h2>
            </div>
          </Container>
        </section>
      </main>
    </body>
  );
}

export default App;
