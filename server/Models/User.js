const mongoose = require('mongoose');
const { isEmail } = require('validator');


const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: [true, 'Please enter your firstName']
  },
  lastName:{
    type: String,
    required: [true, 'Please enter your lastName']
  },
  birthOfDate:{
    type: Date,
    required: [true, 'Please enter your birthOfDate YY/MM/DD']
  },
  image:{
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  },
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
    minlength: [6, 'Minimum password length is 6 characters']
  },
  confirmPassword:{
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters']
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