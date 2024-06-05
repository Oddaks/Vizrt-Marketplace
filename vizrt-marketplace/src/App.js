import './App.css';
import LandingPage from '../src/pages/LandingPage'
import Header from './index.js';
import Footer from '../src/components/Footer'


function App() {
  return (
    <div>
      <header>
      <Header />
      <LandingPage />
      <Footer />
      </header>
    </div>

  );
}

export default App;
