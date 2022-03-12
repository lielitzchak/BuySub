const mongoose = require('mongoose');
const { isEmail } = require('validator');


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  role: {
    type: Array,
    required: true,
    default: ['User']
  },
  groupName:{
    type : String,
    default: ""
  },
  lastLogin : {
    type : Date,
    default : Date.now(),
  },
  isLogin : {
    type : Boolean,
    default : false
  },
},
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);

module.exports = User;