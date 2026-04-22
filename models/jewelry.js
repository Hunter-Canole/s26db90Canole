const mongoose = require("mongoose")
const jewelrySchema = mongoose.Schema({
name: String,
cost: {
    type: Number,
    min: [1, "Cost must be at least $1"],
    max: [10000, "Cost cannot exceed $10,000"]
  },
description: String
})
module.exports = mongoose.model("Jewelry",
jewelrySchema)
