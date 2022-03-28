import { useContext, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { addGroup } from "../../../Services/GroupsService.service";
import { useNavigate } from "react-router-dom";

const CreateTeam = (): JSX.Element => {
    const { auth }: any = useContext(authContext);
    const [createTeamInfo, setCreateTeamInfo]: any = useState({});
    
    const navigate = useNavigate();

    const createInfo = (event: any): void => {
        createTeamInfo[event.target.name] = event.target.value;
      };

    const createTeam = (event: any): void => {
        event.preventDefault();
        // setCreateTeamInfo(createTeamInfo);
        addGroup(createTeamInfo, auth.id)
          .then(() => navigate('/ListToBuy'))
          .catch((err) => console.log(err));
      };

  return (
    <div>
        <h1>CreateTeam</h1>

        <form onSubmit={createTeam}>
        <label>team name</label>
        <input name="groupName" type="text" onChange={createInfo} />

        <label>password</label>
        <input name="password" type="password" onChange={createInfo} />

        <label>color</label>
        <input name="color" type="color" onChange={createInfo} />

        <button>create team</button>
      </form>
    </div>
  )
}

export default CreateTeam;


