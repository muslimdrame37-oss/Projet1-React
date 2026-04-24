// import React from "react"
import { Heart, Mail, MapPin, PhoneForwarded } from "lucide-react";
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
import { compteAReboursList } from "./data/CompteARebours";
import { FaStar, FaTwitter } from "react-icons/fa";
import { avisList } from "./data/avis";
import { storyList } from "./data/storie";
import { serviceList } from "./data/service";

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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
              {productList.map((produit, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={produit.image}
                    alt={produit.title}
                    className="mb-4 h-90 w-full rounded-2xl object-cover "
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
          <Container className="flex items-center justify-between gap-20">
            <div className="flex flex-col gap-6 w-1/2">
              <h2 className="text-5xl font-semibold">Le Deals du Mois</h2>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                sapiente obcaecati totam earum laudantium ullam natus eius
                tempore? Libero necessitatibus placeat iusto minus nam
                temporibus neque sunt et quibusdam quos.
              </p>
              <div className="flex gap-6 shadow shadow-black/30 w-fit px-3 py-3 rounded-lg items-center justify-center">
                {compteAReboursList.map((carte, index) => (
                  <div key={index}>
                    <p className="text-3xl font-extrabold">{carte.compte}</p>
                    <p>{carte.duree}</p>
                  </div>
                ))}
              </div>
              <Button className="gap-3 py-4 text-sm w-fit">
                Voir tous nos articles
                <MoveRight />
              </Button>
            </div>
            <img
              src="/img/Tenue Mariage Homme.jpeg"
              alt=""
              className="w-2/6 h-full rounded-lg shadow-2xl hover:shadow-lg transition-shadow"
            />
          </Container>
        </section>

        <section className="bg-gray-50 py-20 mt-20">
          <Container className="flex flex-col gap-15">
            <div className="flex justify-between">
              <h2 className="text-5xl ">Que disent nos clients ?</h2>
              <div className="flex gap-4">
                <Button variant="secondary" className="py-4 px-4">
                  <MoveLeft />
                </Button>
                <Button variant="primary" className="py-4 px-4">
                  <MoveRight />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {avisList.map((avis, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white gap-4 rounded-lg shadow px-6 py-4 hover:shadow-lg transition-shadow"
                >
                  <div>
                    <div className="flex gap-1">
                      <FaStar color="orange" size={24} />
                      <FaStar color="orange" size={24} />
                      <FaStar color="orange" size={24} />
                      <FaStar color="orange" size={24} />
                      <FaStar color="orange" size={24} />
                    </div>
                  </div>
                  <p>{avis.commentaire}</p>

                  <div className="flex gap-4">
                    <img
                      src={avis.image}
                      alt=""
                      className="w-15 h-15 rounded-full"
                    />
                    <div className="">
                      <div className="font-bold"> {avis.nom} </div>
                      <div className="text-sm"> {avis.profession} </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="mt-30">
          <Container>
            <div className="flex flex-col items-center justify-center gap-15">
              <h2 className="text-5xl ">Nos Stories Instagram</h2>
              <div className="flex gap-8 ">
                {storyList.map((story, index) => (
                  <div key={index}>
                    <img
                      className="h-80 rounded-2xl shadow-sm shadow-gray-400 hover:shadow-lg"
                      src={story.image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="mt-25">
          <Container>
            <div className="grid grid-cols-4 items-center justify-center gap-8">
              {serviceList.map((service, index) => (
                <div key={index}>
                  {service.icon}
                  <h2 className="text-2xl font-semibold">{service.titre}</h2>
                  <p className="text-sm">{service.texte}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between bg-black h-100 mt-30 pt-15">
        <Container>
          <div className="grid grid-cols-4 gap-8 bg-amber-300">
            <div className="flex flex-col items-start gap-3 bg-amber-600">
              <div className="flex items-center justify-center w-40 h-20 bg-white rounded-2xl px-2">
                <img src="/img/Logo + Text.png" alt="" color="" />
              </div>
              <div className="flex items-center justify-center gap-2 text-white">
                <PhoneForwarded />
                <p>(+221) 77777777</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white">
                <Mail />
                <p>ventout@exemple.com</p>
              </div>
              <div className="flex items-start  gap-2">
                <MapPin />
                <p>89, route du front de terre, Dakar, Sénégal</p>
              </div>
            </div>
          </div>
        </Container>
        <div className="flex items-center justify-center text-white bg-amber-100 py-4">
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          &copy; 2024 Ventout. Tous droits réservés. Conçu par Ventout Team.
          <div>
            <FaFacebookFFaTwitter />
            <FaInstagramFaTwitter />
            <FaTwitter />
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
