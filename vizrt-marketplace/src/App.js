import './App.css';
import Header from './components/Header'
import LandingPage from '../src/pages/LandingPage';
import StorePage from '../src/pages/StorePage';
import ProductPage from '../src/pages/ProductPage';
import CartCheckoutPage from './pages/CartCheckoutPage';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../src/Tools/CartContext'; 

function App() {
  return (
    <div>
        <BrowserRouter>
          <CartProvider>
            <nav>
              <Header />
            </nav>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="StorePage" element={<StorePage />} />
              <Route path="ProductPage" element={<ProductPage />} />
              <Route path="CartCheckoutPage" element={<CartCheckoutPage />} />
            </Routes>
            <Footer />
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;