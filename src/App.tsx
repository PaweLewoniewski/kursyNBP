import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes
} from "react-router-dom";
import CalculatorPage from './view/calculator/calculator';
import GoldPage from './view/gold/gold';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">Kursy walut NBP
          <div className='menu'>
            <NavLink to='/'>Kalkulator</NavLink>
            <NavLink to='/gold'>Ceny złota</NavLink>
          </div>
        </header>
        <div className='content'>
          <div className='pages'>
            <Routes>
              <Route path="/" element={<CalculatorPage />} />
              <Route path="/gold" element={<GoldPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;