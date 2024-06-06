import './App.css';
import LandingPage from '../src/pages/LandingPage';
import StorePage from '../src/pages/StorePage';
import Footer from '../src/components/Footer';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="bg-white">
          <ul className="grid grid-cols-3 gap-8 p-8 justify-items-center font-bold text-orange-500">
            <li className='hover:text-black'><Link to="/">Landing page</Link></li>
            <li className='hover:text-black'><Link to="/StorePage">store page</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="StorePage" element={<StorePage />} />
        </Routes>
      </BrowserRouter>        
      <Footer />

    </div>
  );
}

export default App;