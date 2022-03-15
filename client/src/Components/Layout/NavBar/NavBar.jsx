import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Inventory">Inventory</Link>
    </nav>
  )
}
