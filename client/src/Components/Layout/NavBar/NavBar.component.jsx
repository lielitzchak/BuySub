import { Link } from "react-router-dom";
import LogOut from "../../Features/LogOut/LogOut.component";
import { authContext } from "../../../Context/AuthProvider.component";
import { useContext } from "react";
import { Admin } from "../../Pages/Admin/Admin.component";

export default function NavBar() {
  const { auth, setAuth} = useContext(authContext);
  let authPromise = new Promise((resolve, reject) => {
    resolve((res) =>setAuth(res) );
    reject((rej) => rej );
  });
  authPromise
  .then((data)=>{console.log(data)})
  .catch((err)=> console.log(err))
  // authPromise.then((res) =>).catch((ca) =>);
  // console.log(authPromise);
  // console.log("first");
  // console.log(auth.email);
  // let authPromise = auth;
  // console.log("authPromise");
  // console.log(authPromise);

  let admin = "Admin";
  const jj = ()=>{
    if(auth.role[1] !== undefined){
      console.log(auth);
      <Admin/>
    }
  }
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/Inventory">Inventory</Link>
      {auth.email ? <LogOut /> : <Link to="/Login">Login</Link>}
      {jj()}
      {/* {auth.role[1] == admin ? <Admin /> : "node"} */}
      {
        // auth.role[1] == admin ? <Admin /> : "node"

        // console.log(auth.role)
      }
      <h1>{auth.email}</h1>
    </nav>
  );
}
