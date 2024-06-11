import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faShoppingCart, faUserCircle, faSignOut, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import logo from '../logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    // Define state variables
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    // Reference for the dropdown menu
    const dropdownRef = useRef(null);

    // Handle clicks outside the dropdown menu
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        // Event listener for clicks outside the dropdown menu
        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener on component unmount or when showMenu changes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu]);

    return (
        <header className="navbar bg-white text-black p-2 relative max-w-full h-[100px] flex items-center">
            <div className="logo absolute top left-[8px] h-[7em] w-[7em]">
                {/* Logo image and onclick that leads to landing page */}
                <button onClick={() => { window.location.href = '/'; }}>
                    <img src={logo} alt="Logo" />
                </button>
            </div>
            <nav className="flex-1">
                <ul className="nav-links list-none m-0 p-0 flex justify-end items-center">
                    <li className="mr-11">
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
                                        className="search-icon -ml-6"
                                    />
                                )}
                            </div>
                        </div>
                    </li>
                    {/* Shopping cart button */}
                    <li className="shopping-cart mr-8 flex items-center">
                        <Link to ="/CartCheckoutPage"> 
                            <button className="cart-button">
                                <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '30px' }} />
                            </button>
                        </Link> 
                    </li>
                    {/* Dropdown menu button */}
                    <li className="dropdown relative flex items-center">
                        <button
                            onClick={() => setShowMenu(!showMenu)} // Toggle the dropdown menu on button click
                            className="dropdown-button text-black p-1 no-underline">
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: '30px' }} />
                        </button>
                        {/* Dropdown menu items */}
                        {showMenu && (
                            <div ref={dropdownRef} className="dropdown-menu bg-[#1A2C33] border border-[#F1834B] absolute z-10 mt-2 w-64 h-64" style={{ top: "182%", right: "-25%" }}>
                                <a href="#" className="block p-7 text-[#F1834B] border-b border-[#F1834B] text-lg last:border-0">
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        className="mr-2 w-6 h-6"
                                    />{" "}
                                    My profile
                                </a>
                                <a href="/Dashboard" className="block p-7 text-[#F1834B] border-b border-[#F1834B] text-lg last:border-0">
                                    <FontAwesomeIcon
                                        icon={faTableCellsLarge}
                                        className="mr-2 w-6 h-6"
                                    />{" "}
                                    Dashboard
                                </a>
                                <a href="/#" className="block p-7 text-[#F1834B] border-b border-[#F1834B] text-lg last:border-0">
                                    <FontAwesomeIcon
                                        icon={faSignOut}
                                        className="mr-2 w-6 h-6"
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
