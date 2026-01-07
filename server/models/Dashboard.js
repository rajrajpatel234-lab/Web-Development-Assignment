const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  moptroInfo: {
    chargePercentage: { type: Number, default: 68 },
    efficiency: { type: Number, default: 76 },
    performance: { type: Number, default: 20 },
    consumption: { type: Number, default: 1633 },
    monthlyDistance: { type: Number, default: 1.342 }
  },
  utilization: {
    type: [Number],
    default: [65, 80, 70, 90, 85, 75, 95]
  },
  utilizationStats: {
    estimatedCost: { type: Number, default: 2.364 },
    avgDistance: { type: Number, default: 35 },
    revenueTarget: { type: Number, default: 2.400 },
    savings: { type: Number, default: 500 }
  },
  platformSettings: [{
    label: String,
    active: Boolean
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Dashboard", DashboardSchema);