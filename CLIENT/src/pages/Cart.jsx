import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Kundvagn</h1>

      {cart.length === 0 && <p>Kundvagnen är tom</p>}

      {cart.map(item => (
        <div key={item._id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
          <h2>{item.name}</h2>
          <p>{item.price} kr</p>
          <p>
            Antal: 
            <button onClick={() => updateQuantity(item._id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
            {item.quantity}
            <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
          </p>
          <button onClick={() => removeFromCart(item._id)}>Ta bort</button>
        </div>
      ))}

      <h2>Total: {totalPrice} kr</h2>
    </div>
  );
}