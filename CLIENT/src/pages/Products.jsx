import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const { addToCart, totalItems } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Produkter</h1>
      <p>Kundvagn: {totalItems} produkter</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {products.map(product => (
          <div key={product._id} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>{product.price} kr</h3>
            <button onClick={() => addToCart(product)}>Lägg i kundvagn</button>
          </div>
        ))}
      </div>
    </div>
  );
}