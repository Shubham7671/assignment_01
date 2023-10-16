import { Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './pages/Account';
import Home from './pages/Home';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="main">


      <Navbar />

      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/account" element={<Account />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
