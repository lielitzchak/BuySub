import { useState } from "react";
import { addUser } from "../../Services/UserService.service";

export const Register = (): JSX.Element => {
  const [newUser, setNewUser]: any = useState({});
  const updateUserInfo = (event: any): void => {
    newUser[event.target.name] = event.target.value;
  };
  const saveNewUser = (event: any): void => {
    event.preventDefault();
    setNewUser(newUser);
    addUser(newUser);
  };
  return (
    <form
      onSubmit={(event) => {
        saveNewUser(event);
      }}
    >
      <label>first Name</label>
      <input
        name="firstName"
        onChange={(event) => updateUserInfo(event)}
        type="text"
      />
      <br /> <br />
      <label>last Name</label>
      <input
        name="lastName"
        onChange={(event) => updateUserInfo(event)}
        type="text"
      />
      <br /> <br />
      <label>email</label>
      <input
        name="email"
        onChange={(event) => updateUserInfo(event)}
        type="email"
      />
      <br /> <br />
      <label>password</label>
      <input
        name="password"
        onChange={(event) => updateUserInfo(event)}
        type="password"
      />
      <br /> <br />
      <label>image</label>
      <input
        name="image"
        onChange={(event) => updateUserInfo(event)}
        type="url"
      />
      <br /> <br />
      <label>role</label>
      <input
        name="role"
        onChange={(event) => updateUserInfo(event)}
        type="text"
      />
      <br /> <br />
      <label>birth Of Date</label>
      <input
        name="birthOfDate"
        onChange={(event) => updateUserInfo(event)}
        type="date"
      />
      <br /> <br />
      <button>save me!</button>
    </form>
  );
};
