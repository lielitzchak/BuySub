import { logOut } from "../../../Services/AuthService.service";
import { authContext } from "../../../Context/AuthProvider.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const LogOut = (): JSX.Element => {
  const { auth, setAuth }: any = useContext(authContext);
  const navigate = useNavigate();

  const LogOut = (): void => {
    logOut(auth.id)
      .then(() => {
        localStorage.removeItem("jwtToken");
        setAuth({});
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return <span onClick={LogOut}>Log out <ExitToAppIcon/></span>;
};
export default LogOut;
