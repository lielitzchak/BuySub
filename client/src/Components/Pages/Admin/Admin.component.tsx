import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { getGroupInfo } from "../../../Services/GroupsService.service";
import { adminRemoveMember } from "../../../Services/GroupsService.service";

export const Admin = (): JSX.Element => {

  const { auth } = useContext(authContext);
  const [groupInfo,setGroupInfo] :any = useState({});

  useEffect(() => {

    getGroupInfo(auth.groupName).then((data) => {
         setGroupInfo(data)
         console.log(data);
    })

  },[])

  let addMembers = () => {
    console.log('addMembers');
    
  }

  let removeUser = async(id:any) => {
    adminRemoveMember(id,auth.groupName).then((data) => {
      console.log(data);
      
    }).catch((err) => {
      console.log(err);
        
    })
    
  }

  let addAsAdmin = () => {
    console.log('addAsAdmin');
    
  }

  return (
    <>
      <button onClick={addMembers}>Add Members +</button>

      <section>
        <h1>Group Members </h1> 
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
                    <button onClick={addAsAdmin}>Add As Admin</button>

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
