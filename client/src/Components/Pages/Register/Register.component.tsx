import { useState } from "react";
import { singUp } from "../../../Services/AuthServeice.service";


export const Register = (): JSX.Element => {
  const [newUser, setNewUser]: any = useState({});
  const updateUserInfo = (event: any): void => {
    newUser[event.target.name] = event.target.value;
  };
  const saveNewUser = (event: any): void => {
    event.preventDefault();
    setNewUser(newUser);
    singUp(newUser)
    .then((data) => console.log(data));

  };
  return (
    <form onSubmit={saveNewUser}>
      <label>first Name</label>
      <input
        name="firstName"
        onChange={updateUserInfo}
        type="text"
      />
      <br /> <br />
      <label>last Name</label>
      <input
        name="lastName"
        onChange={updateUserInfo}
        type="text"
      />
      <br /> <br />
      <label>email</label>
      <input
        name="email"
        onChange={updateUserInfo}
        type="email"
      />
      <br /> <br />
      <label>password</label>
      <input
        name="password"
        onChange={updateUserInfo}
        type="password"
      />
      <br /> <br />
      <label>image</label>
      <input
        name="image"
        onChange={updateUserInfo}
        type="url"
      />
      <br /> <br />
      <label>birth Of Date</label>
      <input
        name="birthOfDate"
        onChange={updateUserInfo}
        type="date"
      />
      <br /> <br />
      <button>save me!</button>
    </form>
  );
};
