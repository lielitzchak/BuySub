import { useState } from "react";

export const Test = () => {
  let [user, setUserId]: any = useState({});
  const updateUserInf = (event: any): void => {
    user[event.target.name] = event.target.value;
    setUserId(user);
  };

  const updateUserInfo = (event: any) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={updateUserInfo}>
      update user with id.
      <input name="_id" onChange={updateUserInf} type="text" />
      <input name="firstName" onChange={updateUserInf} type="text" />
      <input name="lastName" onChange={updateUserInf} type="text" />
      <button>by id</button>
    </form>
  );
};
