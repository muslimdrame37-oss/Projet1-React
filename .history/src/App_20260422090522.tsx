// import React from "react"
import { Heart } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

const menuLists = [
  {name: "Accueil", url: "/"},
  {name: "Boutique", url: "/"},
  {name: "À propos", url: "/"},
  {name: "Blog", url: "/"},
  {name: "Contact", url: "/"}
]

function App() {
  return ( 
    <body className='container mx-auto px-4 py-8'>
      <header className='flex justify-between items-center'>
        <img src="/src/img/Logo + Text.png" alt="" />
        
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

        <div className='flex gap-4'>
          <Heart size={24} />
          <Search size={24} />
          <ShoppingBag size={24} />
        </div>

        <button>Login</button>
      </header>
    </body>
  )
}

export default App;