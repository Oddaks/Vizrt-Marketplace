import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MenuLogo from './src/vizrt_logo.png';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);


    return (
        <header className="navbar bg-white text-black p-2 relative w-full h-[100px] flex items-start">
            <div className="logo absolute top-[10px] left-[8px] w-[270px] h-[90px]">
                <img src={MenuLogo} alt="Logo" /> 
            </div>
            <nav className="flex-1">
                <ul className="nav-links list-none m-0 p-0 flex justify-end items-center">
                    <li className="mr-2">
                        <div className="searchbar w-[232px] h-[40px] flex overflow-hidden items-center border border-orange-500 bg-transparent">
                            <div className="search-bar-container flex items-center w-full">
                                <input
                                    type="text"
                                    className="search-bar border-none p-1 w-full"
                                    placeholder="Search..."
                                    onFocus={() => setShowSearch(true)}
                                    onBlur={() => setShowSearch(false)}
                                />
                                {!showSearch && <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon ml-1" />}
                            </div>
                        </div>
                    </li>
                    <li className="shopping-cart w-10 h-10 mr-2">
                        <button className="cart-button">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    </li>
                    <li className="dropdown mr-2 relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="dropdown-button text-black p-1 no-underline"
                        >
                            <FontAwesomeIcon icon={faBars} />
                            {showMenu}
                        </button>
                        {showMenu && (
                            <div className="dropdown-menu bg-[#1A2C33] border border-[#F1834B] p-2 absolute z-10 mt-2">
                                <a href="#" className="block p-1 text-[#F1834B] border-b border-[#F1834B] last:border-0">
                                    My profile
                                </a>
                                <a href="#" className="block p-1 text-[#F1834B] border-b border-[#F1834B] last:border-0">
                                    Dashboard
                                </a>
                                <a href="#" className="block p-1 text-[#F1834B]">
                                    Sign Out
                                </a>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
