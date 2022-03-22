const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Please enter a productName'],
    lowercase: true,
  },
  price: {
    type: String
  },
  quantity: {
      type: Number,
      required : [true, 'Please enter a quantity']
  },
  productImage: {
    type: String,
    default : "https://cdn.pixabay.com/photo/2017/01/31/19/38/comic-2026751__340.png"
  },
  expirationDate: {
    type: Date,
  }
},
  { timestamps: true }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;