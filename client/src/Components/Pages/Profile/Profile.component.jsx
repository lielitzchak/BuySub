import { useContext, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import {
  changeUserPassword,
  updateUser,
} from "../../../Services/UserService.service";

export default function Profile() {
  const { auth } = useContext(authContext);
  const [userInfo, setUserInfo] = useState({});
  const [userPasswordInfo, setUserPasswordInfo] = useState({});

  let userInfoToUpdate = (e) => {
    userInfo[e.target.name] = e.target.value;
  };

  let saveUpdatedUserInfo = (e) => {
    e.preventDefault();
    setUserInfo(userInfo);
    updateUser(auth.id, userInfo)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let userPasswordInfoToUpdate = (e) => {
    userPasswordInfo[e.target.name] = e.target.value;
  };

  let updateUserPassword = (e) => {
    e.preventDefault();
    setUserPasswordInfo(userPasswordInfo);

    changeUserPassword(auth.id, userPasswordInfo)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <article className="profile">
      <section className="formInfo">
        <form onSubmit={saveUpdatedUserInfo}>
          <label>First Name</label>
          <input
            type="text"
            placeholder="first Name"
            name="firstName"
            onChange={userInfoToUpdate}
          />

          <label>Last Name</label>
          <input
            type="text"
            placeholder="last Name"
            name="lastName"
            onChange={userInfoToUpdate}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={userInfoToUpdate}
          />

          <label>Profile Image</label>
          <input
            type="text"
            placeholder="image"
            name="image"
            onChange={userInfoToUpdate}
          />

          <label>Birth Of Date</label>
          <input
            type="date"
            placeholder="birth Of Date"
            name="birthOfDate"
            onChange={userInfoToUpdate}
          />

          <button>Update</button>
        </form>
        <form onSubmit={updateUserPassword}>
          <label>Current Password</label>
          <input
            type="password"
            placeholder="current password"
            name="confirmPassword"
            onChange={userPasswordInfoToUpdate}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            placeholder="new password"
            name="password"
            onChange={userPasswordInfoToUpdate}
            required
          />

          <button>Update Password</button>
        </form>
        <div className="profile_user">
          <img src={auth.userImage} alt="user" />
          <div className="profile_detail_user">
            <h1>First Name : {auth.firstName}</h1>
            <h1>Last Name : {auth.lastName}</h1>
            <h1>Email : {auth.email}</h1>
            <h1>Group Name : {auth.groupName ? auth.groupName : "None"}</h1>
            {console.log(auth)}
          </div>
        </div>
      </section>
    </article>
  );
}
