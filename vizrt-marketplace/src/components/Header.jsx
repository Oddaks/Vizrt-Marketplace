import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="navbar bg-white text-black p-2 relative">
      <div className="logo absolute top-2 left-2 w-64 h-24"></div>
      <nav>
        <ul className="nav-links list-none m-0 p-0 flex">
          <li className="arrowback absolute top-32 left-7 w-6 h-5 flex items-start flex-shrink mr-2"></li>
          <li className="shopping-cart absolute top-0 left-68 w-10 h-10 mr-2">
            <button className="cart-button">
              <FontAwesomeIcon icon={faCoffee} />
            </button>
          </li>
          <li className="dropdown mr-2">
            <button onClick={() => setShowMenu(!showMenu)} className="dropdown-button text-black p-1 no-underline">
              <FontAwesomeIcon icon={faBars} />
              {showMenu ? 'X' : 'Menu'}
            </button>
            {showMenu && (
              <div className="dropdown-menu bg-white border border-gray-300 p-2 absolute z-10">
                <a href="#" className="block p-1">
                  Button
                </a>
                <a href="#" className="block p-1">
                  About
                </a>
                <a href="#" className="block p-1">
                  Contact
                </a>
              </div>
            )}
          </li>
          <li className="searchbar absolute top-0 left-0 w-58 h-10 flex overflow-hidden items-center flex-shrink-0 border border-orange-500 bg-transparent mr-2">
            <div className="search-bar-container flex items-center">
              <input type="text" className="search-bar border-none p-1" placeholder="Search..." />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon ml-1" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
