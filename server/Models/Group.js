const mongoose = require('mongoose');


const groupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: [true, 'Please enter a group'],
    unique: true,
    lowercase: true,
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