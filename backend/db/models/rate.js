const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.objectId, ref: "User" },
  book: { type: mongoose.Schema.Types.objectId, ref: "Book" },
  count: { type: Number }
});
