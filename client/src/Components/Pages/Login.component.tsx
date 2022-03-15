import { useState } from "react";

const Login = () => {
  const [user, setUser]: any = useState({});
  const updateUserInfo = (event: any): void => {
    user[event.target.name] = event.target.value;
  };
  const saveNewUser = (event: any): void => {
    event.preventDefault();
    setUser(user);
    console.log(user);
    
    // addUser(newUser).then((data) => console.log(data));
  };
  
  return (
    <form onSubmit={saveNewUser}>
      <label>email</label>
      <input type="email" name="email" onChange={updateUserInfo}/>
      <label>password</label>
      <input type="string" name="password" onChange={updateUserInfo} />
      <button>click</button>
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
