import { useState, useEffect, useRef } from "react";
import { updateGroup } from "../../../Services/GroupsService.service";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
/////////////////////////////////////////////////////
// import Button from '@mui/material/Button';
// import Dialog, { DialogProps } from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function UpdateGroup(props: any) {
    const [groupDetail, setgroupDetail]: any = useState({});
    const [prevgrouptDetail, setPrevgrouptDetail]: any = useState(props.item);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    // const [open, setOpen] = useState(false);




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
                props.setOpen(false)
            })
            .catch((err: any) => {
                console.log(err);
            });

    }

    // const handleClose = () => {
    //     props.setshowUpdate(!props.showUpdate);
    //   };

    // const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    const handleClose = () => {
        props.setOpen(false);

        // props.setShowUpdate(!props.showUpdate);
    };


    return (
        <>
            {/* {props.showUpdate ? */}
            <section>


                <Dialog
                    fullScreen={fullScreen}
                    open={props.open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Update Group Info"}
                    </DialogTitle>

                    <DialogContent>
                        <form >
                            <TextField
                                autoFocus
                                margin="dense"
                                label="groupName"
                                type="text"
                                fullWidth
                                variant="standard"
                                required
                                name="groupName"
                                onChange={updateGroupInfo}
                                placeholder={prevgrouptDetail.groupName}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="color"
                                type="color"
                                fullWidth
                                variant="standard"
                                required
                                name="color"
                                onChange={updateGroupInfo}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="imageGroup"
                                type="text"
                                fullWidth
                                variant="standard"
                                name="imageGroup"
                                onChange={updateGroupInfo}
                                placeholder={prevgrouptDetail.imageGroup}
                            />
                        </form>

                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Disagree
                        </Button>
                        <Button onClick={editGroupInfo} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>

                </Dialog>



                {/* <form action="" autoComplete="on" onSubmit={editGroupInfo}>

                        <label>group Name</label>
                        <input type="text" name="groupName" placeholder={prevgrouptDetail.groupName} onChange={updateGroupInfo} required />

                        <label>color</label>
                        <input type="color" name="color" onChange={updateGroupInfo} required />

                        <label>image Group</label>
                        <input type="text" name="imageGroup" placeholder={prevgrouptDetail.imageGroup} onChange={updateGroupInfo} />

                        <button>Update Group</button>
                    </form>
                    <button >Cancel</button> */}

            </section >
            {/* <Button onClick={handleClose}>Edit Group Info</Button> */}
            {/* } */}
            {/* // <button onClick={() => props.setshowUpdate(!props.showUpdate)}>Edit Group Info</button> */}
        </>

    )
}
