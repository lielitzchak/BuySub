import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { singUp } from "../../../Services/AuthService.service";
import jwt_decode from "jwt-decode";

const SingUp = (): JSX.Element => {
  const [newUser, setNewUser]: any = useState({});

  let { auth, setAuth }: any = useContext(authContext);

  const navigate = useNavigate();

  const updateUserInfo = (event: any): void => {
    newUser[event.target.name] = event.target.value;
  };
  const saveNewUser = (event: any): void => {
    event.preventDefault();
    setNewUser(newUser);
    singUp(newUser).then((res) => {
      if (res.accessToken) {
        localStorage.setItem("jwtToken", res.accessToken);
        let tokenDecoded: any = jwt_decode(res.accessToken);
        setAuth(tokenDecoded);
        // auth = tokenDecoded
        console.log(auth);
        navigate("/");
      }
    });
  };
  return (
    <div className="container_signUp">
      <div className="screen">
        <div className="screen__content">
          <form className="signUp" onSubmit={saveNewUser}>
            <div className="signUp__field">
              <input
                className="signUp__input"
                placeholder="first Name"
                name="firstName"
                onChange={updateUserInfo}
                type="text"
              />
            </div>
            <div className="signUp__field">
              <i className="signUp__icon fas fa-lock"></i>
              <input
                className="signUp__input"
                placeholder="last Name"
                name="lastName"
                onChange={updateUserInfo}
                type="text"
              />
            </div>
            <div className="signUp__field">
              <i className="signUp__icon fas fa-user"></i>
              <input
                className="signUp__input"
                placeholder="email"
                name="email"
                onChange={updateUserInfo}
                type="email"
              />
            </div>
            <div className="signUp__field">
              <i className="signUp__icon fas fa-user"></i>
              <input
                className="signUp__input"
                placeholder="password"
                name="password"
                onChange={updateUserInfo}
                type="password"
              />
            </div>
            <div className="signUp__field">
              <i className="signUp__icon fas fa-user"></i>
              <input
                className="signUp__input"
                placeholder="image"
                name="image"
                onChange={updateUserInfo}
                type="text"
              />
            </div>
            <div className="signUp__field">
              <i className="signUp__icon fas fa-user"></i>
              <input
                className="signUp__input"
                placeholder="birth Of Date"
                name="birthOfDate"
                onChange={updateUserInfo}
                type="date"
              />
            </div>
            <button className="button signUp__submit">
              <span className="button__text">save me!</span>
            </button>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SingUp;
