// SERVER/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const Product = require("./models/Product");
const Cart = require("./models/Cart");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Hämta produkter
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Lägg till i kundvagn
app.post("/api/cart", async (req, res) => {
  const item = new Cart(req.body);
  await item.save();
  res.json({ message: "Added to cart" });
});

// Hämta kundvagn
app.get("/api/cart", async (req, res) => {
  const cart = await Cart.find();
  res.json(cart);
});

// Ta bort från kundvagn
app.delete("/api/cart/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));