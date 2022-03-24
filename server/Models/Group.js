const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: [true, 'Please enter a group'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters']
  },
  color: {
    type: String,
    default: ''
  },
  imageGroup:{
    type: String,
    default: "https://cdn.pixabay.com/photo/2021/12/21/04/58/group-6884594__480.png"
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  products:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
  }],
  listToBuy:{
      type: Array
  }
},
  { timestamps: true }
);


const Group = mongoose.model("Group", groupSchema);

module.exports = Group;