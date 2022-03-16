import { Link } from "react-router-dom";
import LogOut from "../../Features/LogOut/LogOut.component";
import { authContext } from "../../../Context/AuthProvider.component";
import { useContext } from "react";
// import { Admin } from "../../Pages/Admin/Admin.component";

export default function NavBar() {
  const { auth, setAuth } = useContext(authContext);
  let admin = "Admin";
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/Inventory">Inventory</Link>
    </nav>
  );
}
