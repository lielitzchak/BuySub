import { useState} from "react";
import { updateGroup } from "../../../Services/GroupsService.service";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function UpdateGroup(props: any) {
    const [groupDetail, setgroupDetail]: any = useState({});
    const [prevgrouptDetail, setPrevgrouptDetail]: any = useState(props.item);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));




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

    const handleClose = () => {
        props.setOpen(false);
    };


    return (
            <section style={{ backgroundColor: "red" }}>

                    <Dialog
                        fullScreen={fullScreen}
                        open={props.open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Update Group Info"}
                        </DialogTitle>
                        <form>

                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Group Name"
                                type="text"
                                name="groupName"
                                fullWidth
                                variant="standard"
                                onChange={updateGroupInfo}
                                placeholder={prevgrouptDetail.groupName}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Color"
                                type="color"
                                name="color"
                                fullWidth
                                variant="standard"
                                onChange={updateGroupInfo}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Image Group"
                                type="text"
                                name="imageGroup"
                                fullWidth
                                variant="standard"
                                onChange={updateGroupInfo}
                                placeholder={prevgrouptDetail.imageGroup}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button onClick={editGroupInfo} autoFocus>
                                Update Group
                            </Button>
                        </DialogActions>
                         </form>
                    </Dialog>
            </section >
    )
}
