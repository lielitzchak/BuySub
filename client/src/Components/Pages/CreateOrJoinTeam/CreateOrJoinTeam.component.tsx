import { useContext, useState } from "react";
import {authContext} from '../../../Context/AuthProvider.component';

const CreateOrJoinTeam = () => {
  const {auth} = useContext(authContext);
  const [joinTeamInfo,setJoinTeamInfo]:any = useState();
  // const [teamInfo,setTeamInfo]:any = useState();
  const updateTeamInfo = (event: any): void => {
    joinTeamInfo[event.target.name] = event.target.value;
  };
  const saveTeamInfo = (event:any)=>{
    event.preventDefault();
    setJoinTeamInfo(joinTeamInfo);

  }
  return (
    <div>
      <button>join team</button>
      <form onSubmit={saveTeamInfo}>
        <label>team name</label>
        <input
          name="teamName"
          onChange={updateTeamInfo}
          type="text"
        />
        <label>password</label>
        <input
          name="password"
          onChange={updateTeamInfo}
          type="password"
        />
      </form>
      <button>create team</button>
    </div>
  )
}
export default CreateOrJoinTeam
