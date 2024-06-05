import './App.css';
import logo from './logo.svg';
import LandingPage from '../src/pages/LandingPage'
import Header from './index.js';
import Footer from '../src/components/Footer'


function App() {
  return (
    <div className="App">
      <header>
      <Header  />

      </header>
      <body>
        <LandingPage />
        </body>
      <Footer />
    </div>
  );
}

export default App;
