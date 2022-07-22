import { BrowserRouter as BwRouter, Routes, Route } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import { Login } from "./pages/Login";
import { Products } from './pages/Products';

function App() {
  return (
    <BwRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BwRouter>
  );
}

export default App;
