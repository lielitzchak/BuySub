import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { singUp } from "../../../Services/AuthServeice.service";
import jwt_decode from "jwt-decode";



const SingUp = (): JSX.Element => {
  const [newUser, setNewUser]: any = useState({});

  
  let {auth,setAuth}:any = useContext(authContext)

  const navigate = useNavigate()

  const updateUserInfo = (event: any): void => {
    newUser[event.target.name] = event.target.value;
  };
  const saveNewUser = (event: any): void => {
    event.preventDefault();
    setNewUser(newUser);
    singUp(newUser)
    .then((res)=>{
      if(res.accessToken){
        localStorage.setItem("jwtToken",res.accessToken)
        let tokenDecoded:any = jwt_decode(res.accessToken)
        setAuth(tokenDecoded)
        // auth = tokenDecoded
        console.log(auth);
        navigate('/CreateOrJoinTeam');
      }
    })

  };
  return (
    <form onSubmit={saveNewUser}>
      <label>first Name</label>
      <input
        name="firstName"
        onChange={updateUserInfo}
        type="text"
      />
      <br /> <br />
      <label>last Name</label>
      <input
        name="lastName"
        onChange={updateUserInfo}
        type="text"
      />
      <br /> <br />
      <label>email</label>
      <input
        name="email"
        onChange={updateUserInfo}
        type="email"
      />
      <br /> <br />
      <label>password</label>
      <input
        name="password"
        onChange={updateUserInfo}
        type="password"
      />
      <br /> <br />
      <label>image</label>
      <input
        name="image"
        onChange={updateUserInfo}
        type="url"
      />
      <br /> <br />
      <label>birth Of Date</label>
      <input
        name="birthOfDate"
        onChange={updateUserInfo}
        type="date"
      />
      <br /> <br />
      <button>save me!</button>
    </form>
  );
};
export default SingUp;