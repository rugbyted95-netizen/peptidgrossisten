import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Kundvagn</h1>
      {cart.length === 0 && <p>Kundvagnen är tom</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h2>{item.name}</h2>
          <p>{item.price} kr</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
        </div>
      ))}

      <h2>Total: {totalPrice} kr</h2>
    </div>
  );
}

export default Cart;