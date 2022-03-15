import { logOut } from "../../../Services/AuthServeice.service";
import { authContext } from '../../../Context/AuthProvider.component'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const LogOut = () => {
    const { auth,setAuth } = useContext(authContext)
    const navigate = useNavigate()
    console.log(auth);
    
    const LogOut = () => {
        logOut(auth.id)
        .then(() => {
            localStorage.removeItem("jwtToken");
            setAuth({})
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <button onClick={LogOut}>Log out</button>
    )
}
export default LogOut;