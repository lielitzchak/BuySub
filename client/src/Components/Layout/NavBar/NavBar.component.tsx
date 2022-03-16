import { Link } from "react-router-dom"
import LogOut from "../../Features/LogOut/LogOut.component"
import { authContext } from '../../../Context/AuthProvider.component'
import { useContext } from "react"

export default function NavBar() {
  const { auth } = useContext(authContext)

  console.log('before');
  console.log(auth.role);
  console.log('After');
  
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      {auth.groupName?<Link to="/Team">Team</Link>:""}
      {/* <Link to="/Team">Team</Link> */}
      {auth.email?<LogOut/> :<Link to="/Login">Login</Link>}
      <h1>{auth.email}</h1>
      
    </nav>

  )
}
