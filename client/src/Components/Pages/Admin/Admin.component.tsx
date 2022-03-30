import "./Admin.css";
import { useContext, useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { adminAddMember, getGroupInfo } from "../../../Services/GroupsService.service";
import { adminAddAdmin, adminRemoveAdmin, adminRemoveMember } from '../../../Services/GroupsService.service';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Loading from "../../Features/Loading/Loading.component";


export const Admin = (): JSX.Element => {

  const { auth,loading,setLoading } = useContext(authContext);
  const [groupInfo, setGroupInfo]: any = useState({});
  const [userToAddAsMember, setUserToAddAsMember]: any = useState({});
  const [open, setOpen] = useState(false);


  useEffect(() => {
    setLoading(true)
    getGroupInfo(auth.groupName).then((data) => {
      setGroupInfo(data)
      console.log(data);
    }).catch((err) => {
        console.log(err);
        
    }).finally(() => setLoading(false));
  }, [])


  let memberInfo = (event: any) => {
    userToAddAsMember[event.target.name] = [event.target.value]
  }


  let addMembers = (event: any) => {
    event.preventDefault();
    adminAddMember(auth.groupName, userToAddAsMember)
      .then(data => console.log(data))
      .catch(err => console.log(err))
    setUserToAddAsMember(userToAddAsMember);
  }


  let removeUser = async (id: any) => {
    adminRemoveMember(id, auth.groupName).then((data) => {
      setGroupInfo(groupInfo)
      console.log(data);
    }).catch((err) => {
      console.log(err);

    });
    setOpen(false);
  }


  const RemoveAdminRole = (id: any) => {
    adminRemoveAdmin(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }


  const AddAdminRole = (id: any) => {
    adminAddAdmin(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    loading ? <Loading/> :
    <>


      <h1 style={{ textAlign: "center" }}>Group Members </h1>
      <form onSubmit={addMembers} className="addMemberForm">
        <TextField
          id="input-with-icon-textfield"
          label="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={memberInfo}
        />


        <Button variant="contained">Add Member to Group</Button>

      </form>
      <section className="containerUserProfiles">
        {groupInfo.members ? groupInfo.members.map((userMember: any, index: any) => {
          return (

            <section key={index} className="userCard">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={userMember.image}
                    alt="user"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {userMember.firstName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      IsLogin : {userMember.isLogin ? '✔' : <span>&#9747;</span>}
                    </Typography>

                  </CardContent>
                </CardActionArea>
                <div className="ButtonsContainer">
                  <CardContent >
                    <Typography >
                      <Stack>
                        {userMember.role[1] == "Admin" ?
                          <Button variant="contained" onClick={() => RemoveAdminRole(userMember._id)}>Remove Admin Role</Button>
                          :
                          <Button variant="contained" onClick={() => AddAdminRole(userMember._id)}>Add Admin Role</Button>}
                      </Stack>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <div>
                      <Button variant="contained" onClick={handleClickOpen}>
                        Remove User
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"

                      >
                        <DialogTitle id="alert-dialog-title">
                          <article>Are You Sure You Want To Remove <p><span style={{ color: "#1976d2" }}>{userMember.firstName}</span></p> From This Team ?</article>
                        </DialogTitle>
                        <DialogActions>
                          <Button onClick={handleClose}>No</Button>
                          <Button onClick={() => removeUser(userMember._id)} autoFocus>
                            Yes
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </CardActions>
                </div>
              </Card>
            </section>
          )
        }) : <h1>None</h1>}
      </section >

      <section>
        <Outlet />
      </section>
    </>
  );
};
