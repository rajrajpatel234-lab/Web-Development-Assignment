const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    battery: 68,
    performance: 76,
    distance: 163,
    utilization: [40, 55, 30, 70, 60, 45],
  });
});

module.exports = router;
