import { useContext, useState } from "react";
import { authContext } from '../../../Context/AuthProvider.component';
import { addGroup } from "../../../Services/GroupsService.service";
import { joinGroup } from "../../../Services/GroupsService.service";
import { useNavigate } from "react-router-dom";

const CreateOrJoinTeam = () => {
  const { auth } = useContext(authContext);
  const [createTeamInfo, setCreateTeamInfo]: any = useState({});
  const [joinTeamInfo, setJoinTeamInfo]: any = useState({});
  const navigate = useNavigate()

  const createInfo = (event: any): void => {
    createTeamInfo[event.target.name] = event.target.value;
  };

  const createTeam = (event: any) => {
    event.preventDefault();
    setCreateTeamInfo(createTeamInfo);
    addGroup(createTeamInfo, auth.id)
    .then((res) => {
      navigate('/Team')
      console.log(res);
    })
    .catch((err) => {console.log(err)})
  }

  const joinInfo = (event: any): void => {
    joinTeamInfo[event.target.name] = event.target.value;
  };

  const joinTeam = (event: any) => {
    event.preventDefault();
    setJoinTeamInfo(joinTeamInfo);
    joinGroup(joinTeamInfo, auth.id)
    .then((res) => {
      navigate('/Team')
      console.log(res);
    })
    .catch((err) => {console.log(err)})
  }

  return (
    <div>

      <form onSubmit={createTeam}>

        <label>team name</label>
        <input name="groupName" type="text" onChange={createInfo} />

        <label>password</label>
        <input name="password" type="password" onChange={createInfo} />

        <label>color</label>
        <input name="color" type="color" onChange={createInfo} />

        <button>create team</button>
      </form>

      <form onSubmit={joinTeam}>

        <label>team name</label>
        <input name="teamName" type="text" onChange={joinInfo} />

        <label>password</label>
        <input name="password" type="password" onChange={joinInfo} />

        <button>join team</button>
      </form>

    </div>
  )
}
export default CreateOrJoinTeam
