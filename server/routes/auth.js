const express = require("express");
const User = require("../models/User");
const router = express.Router();

// In-memory storage for testing (when MongoDB is not available)
const mockUsers = [];

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Try MongoDB first
    try {
      const exists = await User.findOne({ email });
      if (exists) return res.status(400).json({ message: "User already exists" });

      const user = await User.create({ name, email, password });
      res.json({ success: true, user: { name: user.name, email: user.email } });
    } catch (dbError) {
      // Fallback to in-memory storage
      console.log("Using mock storage for signup");
      const exists = mockUsers.find(u => u.email === email);
      if (exists) return res.status(400).json({ message: "User already exists" });

      const newUser = { name, email, password, id: mockUsers.length + 1 };
      mockUsers.push(newUser);
      res.json({ success: true, user: { name, email } });
    }
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Signup failed" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Try MongoDB first
    try {
      const user = await User.findOne({ email, password });
      if (!user) return res.status(401).json({ message: "Invalid credentials" });

      res.json({ success: true, user: { name: user.name, email: user.email } });
    } catch (dbError) {
      // Fallback to in-memory storage
      console.log("Using mock storage for login");
      const user = mockUsers.find(u => u.email === email && u.password === password);
      if (!user) return res.status(401).json({ message: "Invalid credentials" });

      res.json({ success: true, user: { name: user.name, email: user.email } });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
