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
    default : "https://cdn.pixabay.com/photo/2014/04/03/11/51/milk-312369__480.png"
  },
  expirationDate: {
    type: Date,
  }
},
  { timestamps: true }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;