import { useContext} from "react"
import { Outlet,Navigate} from "react-router-dom"
import { authContext } from "../../../Context/AuthProvider.component"

export default function RequiredAuth() {
    const {auth} = useContext(authContext)

  return (
    auth.email ? <Outlet/> : <Navigate to="/Login"/>
  )
}
