const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  battery: Number,
  performance: Number,
  distance: Number,
  utilization: [Number],
});

module.exports = mongoose.model("Dashboard", DashboardSchema);
