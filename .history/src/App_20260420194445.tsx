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
        {/* LOGO */}
        <img src="/src/img/Logo + Text.png" alt="" />
        {/* NAV */}
        <nav>
          
        </nav>

        <div>
            <FaRegHeart />

        </div>
      </header>
    </div>
  )
}

export default App;