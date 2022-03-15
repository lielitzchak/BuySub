import { useState } from "react";

const Login = () => {
  const j = (event) => {
    event.preventDefault();
    console.log("kjh");
  };
  return (
    <form onSubmit={(event) => j(event)}>
      <label>email</label>
      <input type={"email"} />
      <label>password</label>
      <input type={"string"} />
      <button onClick={(event) => j(event)}>click</button>
    </form>
  );
};
export default Login;

// email: {
//     type: String,
//     required: [true, 'Please enter an email'],
//     unique: true,
//     lowercase: true,
//     validate: [isEmail, 'Please enter a valid email']
//   },
//   password: {
//     type: String,
//     required: [true, 'Please enter a password'],
//     minlength: [6, 'Minimum password length is 6 characters'],
//   },
