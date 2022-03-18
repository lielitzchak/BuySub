import { useContext, useState } from "react";
import { authContext } from '../../../Context/AuthProvider.component';
import { addGroup } from "../../../Services/GroupsServeice.service";

const CreateOrJoinTeam = () => {
  const { auth } = useContext(authContext);
  // const [joinTeamInfo, setJoinTeamInfo]: any = useState();
  const [createTeamInfo, setCreateTeamInfo]: any = useState({});

  const updateTeamInfo = (event: any): void => {
    createTeamInfo[event.target.name] = event.target.value;
  };
  const saveTeamInfo = (event: any) => {
    event.preventDefault();
    setCreateTeamInfo(createTeamInfo);
    addGroup(createTeamInfo, auth.id)
    .then((res) => {console.log(res);})
    .catch((err) => {console.log(err)})
  }
  // const updateTeamInfo = (event: any): void => {
  //   joinTeamInfo[event.target.name] = event.target.value;
  // };
  // const saveTeamInfo = (event: any) => {
  //   event.preventDefault();
  //   setJoinTeamInfo(joinTeamInfo);

  // }
  return (
    <div>

      {/* <form onSubmit={saveTeamInfo}>

        <label>team name</label>
        <input name="teamName" type="text" onChange={updateTeamInfo} />

        <label>password</label>
        <input name="password" type="password" onChange={updateTeamInfo} />

        <button>join team</button>
      </form> */}

      <form onSubmit={saveTeamInfo}>

        <label>group name</label>
        <input name="groupName" type="text" onChange={updateTeamInfo} />

        <label>password</label>
        <input name="password" type="password" onChange={updateTeamInfo} />

        <label>color</label>
        <input name="color" type="color" onChange={updateTeamInfo} />

        <button>create team</button>
      </form>

    </div>
  )
}
export default CreateOrJoinTeam
