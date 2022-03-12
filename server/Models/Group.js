const mongoose = require('mongoose');


const groupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: [true, 'Please enter a group'],
    unique: true,
    lowercase: true,
  },
  members: {
    type: Array,
    required: true,
  },
  products:{
      type: Array
  }
},
  { timestamps: true }
);


const Group = mongoose.model("Group", groupSchema);

module.exports = Group;