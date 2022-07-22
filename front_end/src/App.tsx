import { BrowserRouter as BwRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login";
import { Products } from './pages/Products';

function App() {
  return (
    <BwRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BwRouter>
  );
}

export default App;
