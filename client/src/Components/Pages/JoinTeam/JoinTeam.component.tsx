import { useContext, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { joinGroup } from "../../../Services/GroupsService.service";
import { useNavigate } from "react-router-dom";


const JoinTeam = (): JSX.Element => {
    const { auth }: any = useContext(authContext);
    const [joinTeamInfo, setJoinTeamInfo]: any = useState({});
    const navigate = useNavigate();

    const joinInfo = (event: any): void => {
        joinTeamInfo[event.target.name] = event.target.value;
    };

    const joinTeam = (event: any): void => {
        event.preventDefault();
        // setJoinTeamInfo(joinTeamInfo);
        joinGroup(joinTeamInfo, auth.id)
            .then(() => navigate('/ListToBuy'))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>joinTeam</h1>
            
            <form onSubmit={joinTeam}>
                <label>team name</label>
                <input name="groupName" type="text" onChange={joinInfo} />

                <label>password</label>
                <input name="password" type="password" onChange={joinInfo} />

                <button>join team</button>
            </form>
        </div>
    )
}

export default JoinTeam;
