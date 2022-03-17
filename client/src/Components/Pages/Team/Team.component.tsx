import { Outlet,Link } from "react-router-dom";

const Team = () => {
  return (
    <div>Team.component
      <Link to="Inventory">Inventory</Link>
      <Link to="Setting">Setting</Link>
      <Outlet/>
    </div>
    
  )
}

export default Team;