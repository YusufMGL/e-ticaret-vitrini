import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </Router>
      
  );
}

export default App;