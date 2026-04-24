// import React from "react"
import { Heart } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Button } from './composants/Button';
import { Container } from './composants/Container';
import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';

const menuLists = [
  {name: "Accueil", url: "/"},
  {name: "Boutique", url: "/"},
  {name: "À propos", url: "/"},
  {name: "Blog", url: "/"},
  {name: "Contact", url: "/"}
]

function App() {
  return ( 
    <body className='container mx-auto px-4 py-8 '>
      <header className=''>
        <Container className='flex justify-between items-center'>
          <img src="/src/img/Logo + Text.png" alt="" width={140}/>
        
          <nav>
            <ul className='flex gap-4'>
              {menuLists.map((menu, index) => (
                <li key={index}>
                  <a href={menu.url}>{menu.name}</a>
                </li>
              )
            )}
            </ul>
          </nav>

          <div className='flex items-center gap-4'>
            <Heart size={24} />
            <Search size={24} />
            <ShoppingBag size={24} />
            <Button variant="primary" className='ml-4'>Login</Button>
          </div>
        </Container>
      </header>

      {/* main */}

      <main>
        {/* hero section */}
        <section className='mt-10'>
          <Container className='relative flex items-center bg-gray-100 justify-center gap-6 px-8'>
            <div className="relative flex flex-col items-start w-1/2 gap-4">
              <p className='text-lg text-gray-600'>Des styles uniques pour tous les goûts</p>
              <h1 className='text-5xl font-bold'>Découvrez notre collection de vêtements tendance</h1>
              <p className="text-lg text-gray-600">Plus de 50% de réduction</p>
              <Button variant="primary" className='gap-1'>
                <p>Shop Now</p>
                <MoveRight />
              </Button>
              <p className="absolute top-40 left-25 text-[13rem] font-extrabold text-gray-50">BEST</p>
            </div>
            <img src="/src/img/Quiet Luxury Weekend Style _ Men's Smart Casual Outfit.jpeg" alt="" className='absolte w-1/3 rounded-2xl' />
          </Container>
        </section>

        <section className="mt-10">
          <Container>
            <div className='flex justify-between'>
              <p className="text-5xl font-bold">Nos Catégories</p>
              <div className="flex gap-4">
                <Button variant="secondary" className='py-4 px-4'><MoveLeft /></Button>
                <Button variant="primary" className='py-4 px-4'><MoveRight /></Button>
              </div>
            </div>

            <div className='flex items-center justify-between gap-4 mt-10 '>
              <div className='flex items-end justify-center bg-[url(/src/img/chapeau.jpeg)] w-1/4 h-110 bg-cover bg-center rounded-2xl'>
              <Button variant="secondary" className='text-2xl px-20 py-4 mb-4 border-none bg-white hover:opacity-100'>
                <p>Chapeaux</p>
              </Button>
              </div>
              <div className='flex items-end justify-center bg-[url(/src/img/costumes.jpeg)] w-1/4 h-110 bg-cover bg-center rounded-2xl'>
                <Button variant="secondary" className='text-2xl px-20 py-4 mb-4 border-none bg-white hover:opacity-100'>
                  <p>Costumes</p>
                </Button>
              </div>
              <div className='flex items-end justify-center bg-[url(/src/img/chaussurehomme.jpeg)] w-1/4 h-110 bg-cover bg-center rounded-2xl'>
                <Button variant="secondary" className='text-2xl px-20 py-4 mb-4 border-none bg-white hover:opacity-100'>
                  <p>Chaussures</p>
                </Button>
              </div>
              <div className='flex items-end justify-center bg-[url(/src/img/montre.jpeg)] w-1/4 h-110 bg-cover bg-center rounded-2xl'>
                <Button variant="secondary" className='text-2xl px-20 py-4 mb-4 border-none bg-white hover:opacity-100'>
                  <p>Montres</p>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="mt-10">
          <Container>
            <div>
              <p className="text-5xl font-bold">Nos meilleures ventes</p>
            </div>

            <div className='grid grid-cols-4 gap-4 mt-10 '>
           
              <div className='bg-white rounded-2xl p-4'>
                <img src="/src/img/costumes.jpeg" alt="" className='rounded-2xl mb-4' />
                <p className='text-lg font-bold'>Costume Classique</p>
                <p className='text-md text-gray-400'>100% coton</p>
                <p className='text-gray-600'>$199.99</p>
              </div>

             
              <div className='bg-white rounded-2xl p-4'>
                <img src="/src/img/costumes.jpeg" alt="" className='rounded-2xl mb-4' />
                <p className='text-lg font-bold'>Costume Moderne</p>
                <p className='text-md text-gray-400'>100% coton</p>
                <div className='flex gap-2'>
                  <p className='text-gray-600'>$179.99</p>
                  <p className='text-gray-400  line-through'>$200.99</p>
                </div>
              </div>

              
              <div className='bg-white rounded-2xl p-4'>
                <img src="/src/img/costumes.jpeg" alt="" className='rounded-2xl mb-4' />
                <p className='text-lg font-bold'>Costume Élégant</p>
                <p className='text-md text-gray-400'>100% coton</p>
                <div className='flex gap-2'>
                  <p className='text-gray-600'>$179.99</p>
                  <p className='text-gray-400  line-through'>$200.99</p>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-4'>
                <img src="/src/img/costumes.jpeg" alt="" className='rounded-2xl mb-4' />
                <p className='text-lg font-bold'>Costume Décontracté</p>
                <p className='text-md text-gray-400'>100% coton</p>
                <div className='flex gap-2'>
                  <p className='text-gray-600'>$179.99</p>
                  <p className='text-gray-400  line-through'>$200.99</p>
                </div>
              </div>

            </div>
          </Container>
        </section>





      </main>
    </body>
  )
}

export default App;