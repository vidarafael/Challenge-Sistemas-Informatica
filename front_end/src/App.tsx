import { BrowserRouter as BwRouter, Routes, Route } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import { Login } from "./pages/Login";
import { Products } from './pages/Products';
import { Register } from './pages/Register';

function App() {
  return (
    <BwRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BwRouter>
  );
}

export default App;
