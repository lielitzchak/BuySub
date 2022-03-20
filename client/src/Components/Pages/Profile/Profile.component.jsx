import { useContext } from "react"
import { authContext } from "../../../Context/AuthProvider.component"

export default function Profile() {
    const {auth} = useContext(authContext)
  return (
     <section>
         <h1>Profile Page</h1>

        <img src={auth.userImage} alt="user" />
         <h1>First Name : {auth.firstName}</h1>   
         <h1>Last Name : {auth.lastName}</h1>   
         <h1>Email : {auth.email}</h1>   
         <h1>Group Name : {auth.groupName ? auth.groupName : 'None' }</h1>   
     </section> 
  )
}
