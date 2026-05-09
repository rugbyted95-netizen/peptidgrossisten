import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import banner from "./assets/peptide-mt2.webp";

function App() {
  return (
    <div>
      <nav
        style={{
          padding: "20px",
          display: "flex",
          gap: "20px",
          background: "#111",
        }}
      >
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>

        <Link style={{ color: "white" }} to="/products">
          Products
        </Link>

        <Link style={{ color: "white" }} to="/cart">
          Cart
        </Link>

        <Link style={{ color: "white" }} to="/admin">
          Admin
        </Link>
      </nav>

      <img
        src={banner}
        alt="Banner"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;