import "./Setting.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { exitGroup, getGroupInfo } from "../../../Services/GroupsService.service";
import UpdateGroup from "../../Features/UpdateGroup/UpdateGroup.component";
import Button from '@mui/material/Button';



export default function Setting() {
  const { auth } = useContext(authContext);
  const [groupInfo, setGroupInfo] = useState({});
  const [open, setOpen] = useState(false)


  const navigate = useNavigate()

  useEffect(() => {

    getGroupInfo(auth.groupName).then((data) => {
      setGroupInfo(data)
      console.log(data);
    })
  }, [])


  let exitTheGroup = () => {
    exitGroup(auth.id, auth.groupName)
      .then((data) => console.log(data))
      .then((err) => console.log(err))
    navigate("/");

  }


  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <section className="settingContainer">
      <h1 className="settingHeadline">Setting</h1>
      <section style={{ display: "flex" }}>
        <Button variant="outlined" onClick={exitTheGroup}>Exit The Group</Button>

        {open ? <UpdateGroup item={groupInfo} open={open} setOpen={setOpen} /> : <Button variant="outlined" onClick={handleClickOpen}>Edit Group Info</Button>}
      </section>
      <section>
        <img src={groupInfo.imageGroup} alt="group" />

        <h1>Number Of Products : {groupInfo.products ? groupInfo.products.length : 0}</h1>
        <h1>ListToBuy : {groupInfo.listToBuy ? groupInfo.listToBuy.length : 0}</h1>
        <h1>Group Name : {groupInfo.groupName}</h1>
        <h1>CreatedAt : {groupInfo.createdAt}</h1>
      </section>
      <section>
        <h1>Group Members </h1>
        {groupInfo.members ? groupInfo.members.map((userMember, index) => {
          return (
            <section key={index}>
              <img src={userMember.image} alt="user" />
              <h1>firstName : {userMember.firstName}</h1>
              <h1>lastName : {userMember.lastName}</h1>
              <h1>isLogin : {userMember.isLogin ? '✔' : <span>&#9747;</span>}</h1>
            </section>
          )
        }) : <h1>None</h1>}
      </section>


    </section>
  )
}
