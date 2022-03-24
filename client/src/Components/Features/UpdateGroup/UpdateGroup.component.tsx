import { useState } from "react";
import { updateGroup } from "../../../Services/GroupsService.service";

export default function UpdateGroup(props: any) {
    const [groupDetail, setgroupDetail]: any = useState({});
    const [prevgrouptDetail, setPrevgrouptDetail]: any = useState(props.item);


    let updateGroupInfo = (event: any): void => {
        groupDetail[event.target.name] = event.target.value;
        if (groupDetail.color == "") {
            groupDetail.color = prevgrouptDetail.color
        }
        if (groupDetail.imageGroup == "") {
            groupDetail.imageGroup = prevgrouptDetail.imageGroup
        }
    }


    let editGroupInfo = (event: any): void => {
        event.preventDefault();
        updateGroup(props.item._id, groupDetail)
            .then((data) => {
                console.log(data)
                props.setshowUpdate(!props.showUpdate)
            })
            .catch((err: any) => {
                console.log(err);
            });


    }

    let cancel = () => {
        props.setshowUpdate(!props.showUpdate)
    }

    return (
        <>
            {props.showUpdate ?
                <section>
                    <h1>Update Group</h1>
                    <form action="" autoComplete="on" onSubmit={editGroupInfo}>

                        <label>group Name</label>
                        <input type="text" name="groupName" placeholder={prevgrouptDetail.groupName} onChange={updateGroupInfo} required />

                        <label>color</label>
                        <input type="color" name="color" onChange={updateGroupInfo} required />

                        <label>image Group</label>
                        <input type="text" name="imageGroup" placeholder={prevgrouptDetail.imageGroup} onChange={updateGroupInfo} />

                        <button>Update Group</button>
                    </form>
                    <button onClick={cancel}>Cancel</button>

                </section> :
                <button onClick={() => props.setshowUpdate(!props.showUpdate)}>Edit Group Info</button>}
        </>

    )
}
