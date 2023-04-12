import './App.css';
import { Routes, Route } from "react-router-dom";

// pages & components
import NavBar from './components/NavBar';
import Galerie from './pages/Galerie'
import Speisekarte from './pages/Speisekarte';
import Öffnungzeiten from './pages/Öffnungszeiten'
import Kontakt from './pages/Kontakt'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Speisekarte' element={<Speisekarte />} />
        <Route path='/Kontakt' element={<Kontakt />} />
        <Route path='/Öffnungszeiten' element={<Öffnungzeiten />} />
        <Route path='/Galerie' element={<Galerie />} />
      </Routes>
    </div>
  );
}

export default App;
