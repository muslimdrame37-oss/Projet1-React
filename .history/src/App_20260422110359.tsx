// import React from "react"
import { Heart } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Button } from './composants/Button';
import { Container } from './composants/Container';

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
          <Container className='relative h-screen flex items-center bg-gray-100 justify-center gap-6 px-8'>
            <div className="relative flex flex-col items-start w-1/2 gap-4">
              <p className='text-lg text-gray-600'>Des styles uniques pour tous les goûts</p>
              <h1 className='text-5xl font-bold'>Découvrez notre collection de vêtements tendance</h1>
              <p className="text-lg text-gray-600">Plus de 50% de réduction</p>
              <Button variant="primary">Shop Now</Button>
            </div>
            <div className="relative w-full flex items-center justify-center">
              <p className="absolute w-1/2 top-20 left-1/3 transform -translate-x-2/3 text-[13rem] font-extrabold text-gray-50">BESTBEST</p>
              <img src="/src/img/Quiet Luxury Weekend Style _ Men's Smart Casual Outfit.jpeg" alt="" className='absolute w-1/2 rounded-2xl' />
            </div>
          </Container>
        </section>






      </main>
    </body>
  )
}

export default App;