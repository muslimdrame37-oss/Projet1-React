function App() {
  return ( 
    <div>
      <header>
        <div><img src="/src/img/Logo + Text.png" alt="" />
        </div>
        <nav>
          <ul>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Our Story</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </ul>
        </nav>
        {/* ICONE */}
        <div>
            <FontAwesomeIcon icon={byPrefixAndName.fas['magnifying-glass']} />
            <FontAwesomeIcon icon={byPrefixAndName.far['heart']} />
            <FontAwesomeIcon icon={byPrefixAndName.fas['bag-shopping']} />
        </div>
      </header>
    </div>
  )
}

export default App;