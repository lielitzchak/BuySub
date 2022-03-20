import { useContext} from "react"
import { Outlet,Navigate} from "react-router-dom"
import { authContext } from "../../../Context/AuthProvider.component"

export default function Permission({allowedRole}) {
    const {auth} = useContext(authContext)

  return (
    auth.role && auth.role.length >= 1 && auth.role.includes(allowedRole) ? <Outlet/> :  
    auth.email ? <Navigate to="Unauthorized" /> : <Navigate to="/Login"/>
  )
}
