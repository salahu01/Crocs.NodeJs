const { Schema, mongo, default: mongoose } = require("mongoose");

const productsSchema = new Schema({
  product: {
    type: String,
    required: true,
  },
  actualPrice: {
    type: String,
    required: true,
  },
  currentPrice: {
    type: String,
    required: true,
  },
  offInPercentage: {
    type: String,
    required: true,
  },
  categary: {
    type: String,
    required: true,
  },
  subCategary: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Products", productsSchema);
