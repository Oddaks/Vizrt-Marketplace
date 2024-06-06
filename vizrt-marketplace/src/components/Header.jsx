import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faShoppingCart, faUserCircle, faSignOut, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import logo from '../logo.png';


// The Header component represents the navigation bar of the application
const Header = () => {
    // State to manage the visibility of the dropdown menu
    const [showMenu, setShowMenu] = useState(false);
    // State to manage the visibility of the search icon
    const [showSearch, setShowSearch] = useState(false);




    return (
        <header className="navbar bg-white text-black p-2 relative max-w-full h-[100px] flex items-center">
            {/* Logo positioned at the top left corner */}
            <div className="logo absolute top left-[8px] h-[7em] w-[7em]">
            <img src={logo} alt="Logo" />
            </div>
            <nav className="flex-1">
                <ul className="nav-links list-none m-0 p-0 flex justify-end items-center">
                    {/* Search bar container */}
                    <li className="mr-11"> {/* Adjusted margin-right to 11 */}
                        <div className="searchbar w-[232px] h-[40px] flex overflow-hidden items-center border border-orange-500 bg-transparent">
                            <div className="search-bar-container flex items-center w-full">
                                {/* Input field for search functionality */}
                                <input
                                    type="text"
                                    className="search-bar border-none p-1 w-full"
                                    placeholder="Search..."
                                    onFocus={() => setShowSearch(true)} // Show the search icon on focus
                                    onBlur={() => setShowSearch(false)} // Hide the search icon on blur
                                />
                                {/* Search icon, shown only when not focused on the input */}
                                {!showSearch && (
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        className="search-icon -ml-6" // Adjust the margin to move the icon more to the left
                                    />
                                )}
                            </div>
                        </div>
                    </li>
                    {/* Shopping cart button */}
                    <li className="shopping-cart w-[15] h-[15] mr-8 flex items-center"> {/* Adjusted margin-right to 8 */}
                        <button className="cart-button">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    </li>
                    {/* Dropdown menu button */}
                    <li className="dropdown relative w-[20] h-[20] flex items-center">
                        <button
                            onClick={() => setShowMenu(!showMenu)} // Toggle the dropdown menu on button click
                            className="dropdown-button text-black p-1 no-underline"
                        >
                            <FontAwesomeIcon icon={faBars} />
                            {showMenu}
                        </button>
                        {/* Dropdown menu items */}
                        {showMenu && (
                            <div className="dropdown-menu bg-[#1A2C33] border border-[#F1834B] p-2 absolute z-10 mt-2 w-48" style={{ top: "182%", right: "-25%" }}>
                                <a href="#" className="block p-1 text-[#F1834B] border-b border-[#F1834B] last:border-0">
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        className="mr-2"
                                    />{" "}
                                    My profile
                                </a>
                                <a href="#" className="block p-1 text-[#F1834B] border-b border-[#F1834B] last:border-0">
                                    <FontAwesomeIcon
                                        icon={faTableCellsLarge}
                                        className="mr-2"
                                    />{" "}
                                    Dashboard
                                </a>
                                <a href="#" className="block p-1 text-[#F1834B]">
                                    <FontAwesomeIcon
                                        icon={faSignOut}
                                        className="mr-2"
                                    />{" "}
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
