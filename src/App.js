// import logo from './logo.svg';
// import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from './components/Home';
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    
  <>
   <CartProvider>
  <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
  </HashRouter>
  </CartProvider>
  </>

  );
}

export default App;
