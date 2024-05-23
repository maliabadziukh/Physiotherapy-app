const mongoose = require("mongoose");

const physioSchema = mongoose.Schema({
  name: { type: String, required: true },
  specialisation: { type: String, default: "General" },
});

module.exports = mongoose.model("Physio", physioSchema);
