import { useContext } from "react";
import { authContext } from "../../../Context/AuthProvider.component";


export default function Setting() {
  const { auth } = useContext(authContext);
  return (
    <section>
      <h1>Setting</h1>
      <h1>Group Name : {auth.groupName}</h1>
      {/* <h1>Members :{auth.members && auth.members.length ? auth.members.length : 0}</h1>
      <h1>Numbers Of Products : {auth.products && auth.products.length ? auth.products.length : 0}</h1> */} 
      
      </section>
  )
}
