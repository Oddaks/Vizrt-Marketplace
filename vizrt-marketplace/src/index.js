import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Header
const Header = () => {
    return (
        <header className='navbar'>
            <div className="logo">
            </div>
            <nav>
                <ul className="nav-links">
                    <li>
                        <button className="back-button">
                            <i className="icon">Icon 1</i>
                        </button>
                    </li>
                    <li>
                        <button className="cart-button">
                            <i className="icon">Icon 2</i>
                        </button>
                    </li>
                    <li className="dropdown">
                        <button className="dropdown-button">
                            <i className="icon">Icon 3</i>
                        </button>
                        <ul className="dropdown-menu">
                            <li>Dropdown Item 1</li>
                            <li>Dropdown Item 2</li>
                            <li>Dropdown Item 3</li>
                        </ul>
                    </li>
                    <li>
                        <input type="text" className="search-bar" placeholder="Search..." />
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
