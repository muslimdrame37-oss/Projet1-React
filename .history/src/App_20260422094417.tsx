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
          <Container className='flex items-center bg-gray-100 height- text-center gap-6 py-16'>
            <div className="flex flex-col items-start w-1/2 gap-4 py-8">
              <p className='text-lg text-gray-600'>Des styles uniques pour tous les goûts</p>
              <h1 className='text-4xl font-bold'>Découvrez notre collection de vêtements tendance</h1>
              <Button variant="primary">Shop Now</Button>
            </div>
            <img src="/src/img/Quiet Luxury Weekend Style _ Men's Smart Casual Outfit.jpeg" alt="" className='w-1/2 ' />
          </Container>
        </section>






      </main>
    </body>
  )
}

export default App;