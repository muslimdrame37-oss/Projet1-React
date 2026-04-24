// import React from "react"
import { FaRegHeart } from "react-icons/fa";

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
              
            )
          )}
          </ul>
        </nav>

        <div>
            <FaRegHeart />

        </div>
      </header>
    </div>
  )
}

export default App;