const express = require("express");
const router = express.Router();
const Dashboard = require("../models/Dashboard");

// Get dashboard data
router.get("/", async (req, res) => {
  try {
    // In a real app, you would get userId from authentication middleware
    // For now, return mock data
    const dashboardData = {
      user: {
        name: "Mark Johnson",
        email: "mark.johnson@example.com",
        role: "Customer"
      },
      moptroInfo: {
        chargePercentage: 68,
        efficiency: 76,
        performance: 20,
        consumption: 1633,
        monthlyDistance: 1.342
      },
      utilization: [65, 80, 70, 90, 85, 75, 95],
      utilizationStats: {
        estimatedCost: 2.364,
        avgDistance: 35,
        revenueTarget: 2.400,
        savings: 500
      },
      platformSettings: [
        { label: "Send the update indicator to all", active: true },
        { label: "Engage other platform drivers (iot)", active: false },
        { label: "Use Geo location tracking", active: true },
        { label: "Nearby product updates", active: false },
        { label: "Generate quality", active: true }
      ],
      products: [
        {
          id: 1,
          name: "WASP",
          description: "3 in 1 digital work station, innovation advancing sustainable progress",
          badge: "New"
        },
        {
          id: 2,
          name: "SNAA",
          description: "3 in 1 digital work station, innovation advancing sustainable progress",
          badge: "Featured"
        },
        {
          id: 3,
          name: "E-Vehicle",
          description: "3 in 1 digital work station, innovation advancing sustainable progress",
          badge: "Popular"
        }
      ]
    };

    res.json(dashboardData);
  } catch (error) {
    console.error("Dashboard route error:", error);
    res.status(500).json({ error: "Failed to fetch dashboard data" });
  }
});

// Update dashboard data
router.put("/", async (req, res) => {
  try {
    // In a real app, update the database with new dashboard data
    res.json({ message: "Dashboard updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update dashboard" });
  }
});

module.exports = router;