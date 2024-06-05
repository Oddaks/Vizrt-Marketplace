import './App.css';
import logo from './logo.svg';
import LandingPage from '../src/pages/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">

      <Header  />
        <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
