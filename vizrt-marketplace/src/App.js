import './App.css';
import LandingPage from '../src/pages/LandingPage';
import StorePage from '../src/pages/StorePage';
import ProductPage from '../src/pages/ProductPage';
import Footer from '../src/components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="bg-white">
          <ul className="grid grid-cols-3 gap-8 p-8 justify-items-center font-bold text-orange-500">
            <li className='hover:text-black'><Link to="/">Landing page</Link></li>
            <li className='hover:text-black'><Link to="/StorePage">store page</Link></li>
            <li className='hover:text-black'><Link to="/ProductPage">Product page</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="StorePage" element={<StorePage />} />
          <Route path="ProductPage" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
