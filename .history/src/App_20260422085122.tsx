// import React from "react"
import { Heart } from 'lucide-react';
import { Search } from 'lucide-react';
import { Shopping } from 'lucide-react';

const menuLists = [
  {name: "Accueil", url: "/"},
  {name: "Boutique", url: "/"},
  {name: "À propos", url: "/"},
  {name: "Blog", url: "/"},
  {name: "Contact", url: "/"}
]

function App() {
  return ( 
    <div>
      <header>
        <img src="/src/img/Logo + Text.png" alt="" />
        
        <nav>
          <ul>
            {menuLists.map((menu, index) => (
              <li key={index}>
                <a href={menu.url}>{menu.name}</a>
              </li>
            )
          )}
          </ul>
        </nav>

        <div>
          <Heart size={24} />
          <Search size={24} />
          <card size={24} />


        </div>
      </header>
    </div>
  )
}

export default App;