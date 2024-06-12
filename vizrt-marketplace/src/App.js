import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../src/Tools/CartContext'; 
import { OrderProvider } from './Tools/OrderContext'; 
import Header from './components/Header'
import LandingPage from '../src/pages/LandingPage';
import StorePage from '../src/pages/StorePage';
import ProductPage from '../src/pages/ProductPage';
import CartCheckoutPage from './pages/CartCheckoutPage';
import OrderPage from './pages/OrderPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <BrowserRouter>
            <OrderProvider>
                <CartProvider>
                    <nav>
                        <Header />
                    </nav>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="StorePage" element={<StorePage />} />
                        <Route path="ProductPage" element={<ProductPage />} />
                        <Route path="CartCheckoutPage" element={<CartCheckoutPage />} />
                        <Route path="OrderPage" element={<OrderPage />} />
                        <Route path="ProductPage/:productId" element={<ProductPage />} />
                    </Routes>
                </CartProvider>
                <Footer />
            </OrderProvider>
        </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
