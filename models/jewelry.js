const mongoose = require("mongoose")
const jewelrySchema = mongoose.Schema({
name: String,
cost: Number,
description: String
})
module.exports = mongoose.model("Jewelry",
jewelrySchema)
