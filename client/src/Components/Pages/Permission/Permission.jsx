import { useContext} from "react"
import { Outlet,Navigate} from "react-router-dom"
import { authContext } from "../../../Context/AuthProvider.component"

export default function Permission({role}) {
    const {auth} = useContext(authContext)

  return (
    auth.role && auth.role.length >= 1 && auth.role.includes(role) ? <Outlet/> :  
    auth.email ? <Navigate to="Unauthorized" /> : <Navigate to="/Login"/>
  )
}
