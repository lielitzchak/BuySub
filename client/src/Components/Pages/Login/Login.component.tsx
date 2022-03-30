import { useContext, useState } from "react";
import { logIn } from "../../../Services/AuthService.service";
import jwt_decode from "jwt-decode";
import { authContext } from "../../../Context/AuthProvider.component";
import { useNavigate } from "react-router-dom";
import Loading from "../../Features/Loading/Loading.component";

const Login = (): JSX.Element => {
  const [user, setUser]: any = useState({});

  const { auth, setAuth,loading, setLoading}: any = useContext(authContext);

  const navigate = useNavigate();

  const updateUserInfo = (event: any): void => {
    user[event.target.name] = event.target.value;
  };
  const saveNewUser = (event: any): void => {
    event.preventDefault();
    // setUser(user);
    setLoading(true)
    console.log(user);
    logIn(user)
      .then((res) => {
        if (res.accessToken) {
          localStorage.setItem("jwtToken", res.accessToken);
          let tokenDecoded: any = jwt_decode(res.accessToken);
          setAuth(tokenDecoded);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err); //לשלוח מהשרת הודעת שגיאה
      }).finally(() => setLoading(false));
  };

  return (

    loading ? <Loading/> :
     
    <div className="container">
      <span className="background_logIn_page"></span>
      <div className="screen">
        <div className="screen__content">
          <form onSubmit={saveNewUser} className="login">
            <div className="login__field">
              <input
                onChange={updateUserInfo}
                type="text"
                name="email"
                className="login__input"
                placeholder="Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                onChange={updateUserInfo}
                type="password"
                name="password"
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
    
  );
};
export default Login;
