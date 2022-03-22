import { useState } from "react";
import { updateGroup } from "../../../Services/GroupsService.service";

export default function UpdateGroup(props: any) {
    const [groupDetail, setgroupDetail]: any = useState({});
    const [prevgrouptDetail, setPrevgrouptDetail]: any = useState(props.item);
    const [showUpdate, setshowUpdate] = useState(false)


    let updateGroupInfo = (event: any): void => {
        groupDetail[event.target.name] = event.target.value;        
        if (groupDetail.color == ""){
            groupDetail.color = prevgrouptDetail.color
        }
        if (groupDetail.imageGroup == ""){
            groupDetail.imageGroup = prevgrouptDetail.imageGroup
        }
    }


    let editProduct = (event: any): void => {
        event.preventDefault();
        updateGroup(props.item._id, groupDetail)
            .then((res) => { console.log(res) })
            .then(() => { setshowUpdate(!showUpdate) })
            .then(() => { setgroupDetail(groupDetail) })
            .catch((err:any) => {
                console.log(err);
            });
            

    }
    console.log(prevgrouptDetail);
    let cancel = ()=>{
        setshowUpdate(!showUpdate)
    }

    return (
        <>
            {showUpdate ?
                <section>
                    <h1>Update Product</h1>
                    <form action="" autoComplete="on" onSubmit={editProduct}>

                        <label>group Name</label>
                        <input type="text" name="groupName" placeholder={prevgrouptDetail.groupName}   onChange={updateGroupInfo} required />

                        <label>color</label>
                        <input type="color" name="color"  onChange={updateGroupInfo} required />

                        <label>image Group</label>
                        <input type="text" name="imageGroup" placeholder={prevgrouptDetail.imageGroup} onChange={updateGroupInfo} />

                        <button>Update Product</button>
                    </form>
                <button onClick={cancel}>Cancel</button> 

                    {console.log(prevgrouptDetail)}

                </section> :
                <button onClick={() => setshowUpdate(!showUpdate)}>Edit Group Info</button>}
        </>

    )
}
