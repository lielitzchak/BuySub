import { useContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { exitGroup, getGroupInfo } from "../../../Services/GroupsService.service";
import UpdateGroup from "../../Features/UpdateGroup/UpdateGroup.component";
import Button from '@mui/material/Button';
import Loading from "../../Features/Loading/Loading.component";



export default function Setting() {
  const { auth,loading, setLoading} = useContext(authContext);
  const [groupInfo, setGroupInfo] = useState({});
  const [open, setOpen] = useState(false)


  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    getGroupInfo(auth.groupName).then((data) => {
      setGroupInfo(data)
    }).finally(() => setLoading(false));
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

    loading ? <Loading/> :

    <section className="settingContainer">
      <button className="exitGroup" onClick={exitTheGroup}>Exit The Group</button>


      {open ? <UpdateGroup item={groupInfo} open={open} setOpen={setOpen} /> : <Button className="editBtn" variant="outlined" onClick={handleClickOpen}>Edit Group Info</Button>}

      <img className="imgGroup" src={groupInfo.imageGroup} alt="group" />

       <div>
          <h1>Number Of Products : {groupInfo.products ? groupInfo.products.length : 0}</h1>
          <h1>ListToBuy : {groupInfo.listToBuy ? groupInfo.listToBuy.length : 0}</h1>
          <h1>Group Name : {groupInfo.groupName}</h1>
          <h1>CreatedAt : {groupInfo.createdAt}</h1>
       </div>
      <section className="groupMembers">
        <h1 className="title">Group Members </h1>
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
