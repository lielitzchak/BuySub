import { useContext, useState } from "react";
import { logIn } from "../../../Services/AuthServeice.service";
import jwt_decode from "jwt-decode";
import {authContext} from '../../../Context/AuthProvider.component'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser]: any = useState({});
  
  const {auth,setAuth}:any = useContext(authContext)

  const navigate = useNavigate()

  const updateUserInfo = (event: any): void => {
    user[event.target.name] = event.target.value;
  };
  const saveNewUser = (event: any): void => {
    event.preventDefault();
    // setUser(user);
    console.log(user);
    logIn(user)
    .then((res)=>{
      if(res.accessToken){
        localStorage.setItem("jwtToken",res.accessToken)
        let tokenDecoded:any = jwt_decode(res.accessToken)
        setAuth(tokenDecoded)
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

