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
  expirationDate: {
    type: String,
  }
},
  { timestamps: true }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;