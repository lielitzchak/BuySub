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
    default : "https://cdn.pixabay.com/photo/2015/11/06/13/25/brand-1027862__340.jpg"
  },
  expirationDate: {
    type: Date,
  }
},
  { timestamps: true }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;