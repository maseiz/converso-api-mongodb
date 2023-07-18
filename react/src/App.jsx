import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Details from './Pages/Details';
import NoPage from './Pages/NoPage';
import Cart from './Pages/Cart.jsx';
import Login from './Components/NavBar/Login'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;