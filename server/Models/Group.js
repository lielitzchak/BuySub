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
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  products:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
  }]
},
  { timestamps: true }
);


const Group = mongoose.model("Group", groupSchema);

module.exports = Group;