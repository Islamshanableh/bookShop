const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  count: { type: Number },
});

module.exports = mongoose.model("Rate", rateSchema);
