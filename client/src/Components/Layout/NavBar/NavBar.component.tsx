import { Link } from "react-router-dom";
import LogOut from "../../Features/LogOut/LogOut.component";
import { authContext } from "../../../Context/AuthProvider.component";
import { useContext } from "react";

const NavBar = (): JSX.Element => {
  const { auth, setAuth }: any = useContext(authContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      {auth.email && auth.groupName != "" ? <Link to="/Team">Team</Link> : ""}
      {auth.role && auth.role.length >= 1 && auth.role.includes("Admin") ? (
        <Link to="/Admin">Admin</Link>
      ) : (
        ""
      )}
      {auth.email ? <LogOut /> : <Link to="/Login">Login</Link>}
      {/* <h1>{auth.email}</h1> */}
      {/* <h1>{auth.role}</h1> */}
    </nav>
  );
};
export default NavBar;
