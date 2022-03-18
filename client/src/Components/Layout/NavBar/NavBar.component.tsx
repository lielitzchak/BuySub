import { Link } from "react-router-dom"
import LogOut from "../../Features/LogOut/LogOut.component"
import { authContext } from '../../../Context/AuthProvider.component'
import { useContext, useEffect } from "react"
// import Somthing from "../../Pages/Somthing/Somthing.component"

export default function NavBar() {
  
  const { auth } = useContext(authContext)
 
   if(auth.email != undefined && auth.role.includes("Admin")== true ){
    return <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/Team">Team</Link>
      <LogOut/>
      </nav>
  }

  else if (auth.email != undefined) {
    return <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/Login">Log in</Link>
    </nav>
  }
  
  return  (
  
    <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/Login">Log in</Link>
    </nav>
  )}
