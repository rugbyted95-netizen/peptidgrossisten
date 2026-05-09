// server/db.js
const mongoose = require("mongoose");

// Din MongoDB-anslutningssträng från Atlas
const uri = "mongodb+srv://lowerasmussen_db_user:u9MjwuWdicgzkCRS@cluster0.vare4q3.mongodb.net/?appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));

module.exports = mongoose;