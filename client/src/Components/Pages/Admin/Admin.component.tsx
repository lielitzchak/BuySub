import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { adminRemoveAdmin,adminAddAdmin,adminAddMember, getGroupInfo } from "../../../Services/GroupsService.service";
import { adminRemoveMember } from "../../../Services/GroupsService.service";

export const Admin = (): JSX.Element => {

  const { auth } = useContext(authContext);
  const [groupInfo,setGroupInfo] :any = useState({});
  const [userToAddAsMember,setUserToAddAsMember] :any = useState({});

  useEffect(() => {

    getGroupInfo(auth.groupName).then((data) => {
         setGroupInfo(data)
         console.log(data);
    })

  },[])

  let memberInfo = (event:any)=>{
    userToAddAsMember[event.target.name] = [event.target.value]
  }
  let addMembers = (event:any) => {
    event.preventDefault();
    adminAddMember(auth.groupName,userToAddAsMember)
    .then(data=>console.log(data))
    .catch(err => console.log(err))
    setUserToAddAsMember(userToAddAsMember);
  }

  let removeUser = async(id:any) => {
    adminRemoveMember(id,auth.groupName).then((data) => {
      console.log(data);
      
    }).catch((err) => {
      console.log(err);
        
    })
    
  }

  let addAsAdmin = (id:any) => {
    adminAddAdmin(id)
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
  }

  let removeAdminRole = (id:any) => {
    adminRemoveAdmin(id)
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
  }


  return (
    <>

      <section>
        <h1>Group Members </h1> 
        <form onSubmit={addMembers}>
          <label>email</label>
          <input name="email" type="email" onChange={memberInfo}/>
          <button>Add Member to Group</button>
        </form>
         {groupInfo.members ? groupInfo.members.map((userMember: any,index :any) => {
           return (
              <section key={index}>
                    <img src={userMember.image} alt="user" />
                    <h1>FirstName : {userMember.firstName}</h1>
                    <h1>LastName : {userMember.lastName}</h1>
                    <h1>IsLogin : {userMember.isLogin ? '✔' : 'false' }</h1>
                    <h1>id : {userMember._id}</h1>
                    <h1>Role : {userMember.role[1]}</h1>
                    <button onClick={() => removeUser(userMember._id)}>Remove User </button><br />

                    {userMember.role[1] == "Admin" ? <button onClick={()=>removeAdminRole(userMember._id)}>Remove Admin</button>
                     :
                    <button onClick={()=>addAsAdmin(userMember._id)}>Add As Admin</button>}
              </section>
           )
         }) : <h1>None</h1>}
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};
