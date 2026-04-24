import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

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
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </header>
    </div>
  )
}

export default App;