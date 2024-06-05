import './App.css';
import LandingPage from '../src/pages/LandingPage'

function App() {
  return (
    <div>
      <nav className="bg-white">
          <ul className="grid grid-cols-3 gap-8 p-8 justify-items-center font-bold text-orange-500">
            <li className='hover:text-black'> Home</li>
            <li className='hover:text-black'>Driver Signup</li>
            <li className='hover:text-black'>List of races</li>
          </ul>
        </nav>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
