import { Link } from "react-router-dom"
import LogOut from "../../Features/LogOut/LogOut.component"
import { authContext } from '../../../Context/AuthProvider.component'
import { useContext } from "react"

export default function NavBar() {
  const { auth } = useContext(authContext)
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/Inventory">Inventory</Link>
      {auth.email?<LogOut/> :<Link to="/Login">Login</Link>}
    </nav>

  )
}
