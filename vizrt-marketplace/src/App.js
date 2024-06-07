import './App.css';
import Header from './components/Header'
import LandingPage from '../src/pages/LandingPage';
import StorePage from '../src/pages/StorePage';
import ProductPage from '../src/pages/ProductPage';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>

      <BrowserRouter>
        <nav>
          <Header />
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