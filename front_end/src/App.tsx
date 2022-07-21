import { BrowserRouter as BwRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login";

function App() {
  return (
    <BwRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BwRouter>
  );
}

export default App;
