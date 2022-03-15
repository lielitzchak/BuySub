import { useContext, useState } from "react";
import { logIn } from "../../../Services/AuthServeice.service";
import jwt_decode from "jwt-decode";
import {authContext} from '../../../Context/AuthProvider.component'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser]: any = useState({});
  
  let {auth,setAuth}:any = useContext(authContext)

  const navigate = useNavigate()

  const updateUserInfo = (event: any): void => {
    user[event.target.name] = event.target.value;
  };
  const saveNewUser = (event: any): void => {
    event.preventDefault();
    setUser(user);
    console.log(user);
    logIn(user)
    .then((res)=>{
      if(res.accessToken){
        localStorage.setItem("jwtToken",res.accessToken)
        let tokenDecoded:any = jwt_decode(res.accessToken)
        setAuth(tokenDecoded)
        // auth = tokenDecoded
        console.log(auth);
        console.log(auth.email);
        navigate('/');
      }
    })
    .catch((err)=>{console.log(err);//לשלוח מהשרת הודעת שגיעה 
    })
  };
  
  return (
    <form onSubmit={saveNewUser}>
      <label>email</label>
      <input type="email" name="email" onChange={updateUserInfo}/>
      <label>password</label>
      <input type="password" name="password" onChange={updateUserInfo} />
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
