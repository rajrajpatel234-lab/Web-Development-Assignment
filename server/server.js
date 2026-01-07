const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/dashboard", require("./routes/dashboard"));
console.log("MONGO_URI:", process.env.MONGO_URI);

// DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
