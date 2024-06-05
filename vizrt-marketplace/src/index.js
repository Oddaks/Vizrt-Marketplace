import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSolid } from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Header
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className='navbar'>
            <div className="logo">
            </div>
            <nav>
                <ul className="nav-links">
                    <li>
                   { /* <button className="back-button">
                        <i className="icon">Icon 1</i>
                         </button> */}
                    </li>
                    <li>
                    <button  className="cart-button">
                    <FontAwesomeIcon icon={faCoffee} />
                    </button>
                    </li>
                    <li className="dropdown">
                    <button onClick={() => setShowMenu(!showMenu)} className="dropdown-button">
                        {showMenu ? "Menu": "X"}
                        <i className="icon">Icon 3</i>
                    </button>
                        {showMenu && (
                        <>
                        <a href="#">
              Button
            </a>
            <a href="#">
              About
            </a>
            <a href="#">
              Contact
            </a>
          </>
        )}
                       {/* <ul className="dropdown-menu">
                            <li>Dropdown Item 1</li>
                            <li>Dashboard</li>
                            <li>Dropdown Item 3</li>
                        </ul> */}
                </li>
                <li>
                    <div className="search-bar-container">
                    <input type="text" className="search-bar" placeholder="Search..." />
                    <FontAwesomeIcon icon={faSolid} className="search-icon" />
                    </div>
                </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
