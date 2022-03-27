import "./Admin.css";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { adminRemoveAdmin, adminAddAdmin, adminAddMember, getGroupInfo } from "../../../Services/GroupsService.service";
import { adminRemoveMember } from "../../../Services/GroupsService.service";
import Switch from '@mui/material/Switch';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';



export const Admin = (): JSX.Element => {

  const { auth } = useContext(authContext);
  const [groupInfo, setGroupInfo]: any = useState({});
  const [userToAddAsMember, setUserToAddAsMember]: any = useState({});
  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    getGroupInfo(auth.groupName).then((data) => {
      setGroupInfo(data)
      console.log(data);
    })
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
      console.log(data);

    }).catch((err) => {
      console.log(err);

    });
    setOpen(false);
  }


  const handleChange = (event: any, id: any) => {
    setChecked(!event);
    if (checked) {
      adminRemoveAdmin(id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }
    else {
      adminAddAdmin(id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }
  };


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>

      <section>
        <h1>Group Members </h1>
        <form onSubmit={addMembers}>
          <label>email</label>
          <input name="email" type="email" onChange={memberInfo} />
          <button>Add Member to Group</button>
        </form>
        {groupInfo.members ? groupInfo.members.map((userMember: any, index: any) => {
          return (
            // <section className="card-container" key={index}>
            //   <img src={userMember.image} alt="user" />
            //   <h3>{userMember.firstName} {userMember.lastName}</h3>
            //   <h4>IsLogin : {userMember.isLogin ? '✔' : 'false'}</h4>
            //   <section style={{ display: "flex" }}>
            //     <h1>Admin :</h1>
            //     <Switch
            //       checked={userMember.role[1] == "Admin" ? checked : !checked}
            //       onChange={() => handleChange(checked, userMember._id)}
            //       inputProps={{ 'aria-label': 'controlled' }}
            //       size="small"
            //     />
            //   </section>

            //   <div className="buttons">
            //     <div>
            //       <Button variant="outlined" onClick={handleClickOpen}>
            //         Remove User
            //       </Button>
            //       <Dialog
            //         open={open}
            //         onClose={handleClose}
            //         aria-labelledby="alert-dialog-title"
            //         aria-describedby="alert-dialog-description"
            //       >
            //         <DialogTitle id="alert-dialog-title">
            //           <article>Are You Sure You Want To Remove <span style={{ color: "#1976d2" }}>{userMember.firstName}</span> From This Team ?</article>
            //         </DialogTitle>
            //         <DialogActions>
            //           <Button onClick={handleClose}>No</Button>
            //           <Button onClick={() => removeUser(userMember._id)} autoFocus>
            //             Yes
            //           </Button>
            //         </DialogActions>
            //       </Dialog>
            //     </div>
            //   </div>
            // </section>

            <section key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="170"
                    image={userMember.image}
                    alt="user"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {userMember.firstName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      IsLogin : {userMember.isLogin ? '✔' : 'false'}
                    </Typography>

                  </CardContent>
                </CardActionArea>
                <CardContent>
                  <Typography style={{ display: "flex" }}>
                      Admin :
                      <Switch
                        checked={userMember.role[1] == "Admin" ? checked : !checked}
                        onChange={() => handleChange(checked, userMember._id)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        size="small"
                      />
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Button variant="outlined" onClick={handleClickOpen}>
                      Remove User
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        <article>Are You Sure You Want To Remove <span style={{ color: "#1976d2" }}>{userMember.firstName}</span> From This Team ?</article>
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
              </Card>
            </section>


            // <section key={index}>
            //   <img src={userMember.image} alt="user" />
            //   <h1>FirstName : {userMember.firstName}</h1>
            //   <h1>LastName : {userMember.lastName}</h1>
            //   <h1>IsLogin : {userMember.isLogin ? '✔' : 'false'}</h1>
            //   <section style={{ display: "flex" }}>
            //     <h1>Admin :</h1>
            //     <Switch
            //       checked={userMember.role[1] == "Admin" ? checked : !checked}
            //       onChange={() => handleChange(checked, userMember._id)}
            //       inputProps={{ 'aria-label': 'controlled' }}
            //       size="small"
            //     />
            //   </section>
            //   <div>
            //     <Button variant="outlined" onClick={handleClickOpen}>
            //       Remove User
            //     </Button>
            //     <Dialog
            //       open={open}
            //       onClose={handleClose}
            //       aria-labelledby="alert-dialog-title"
            //       aria-describedby="alert-dialog-description"
            //     >
            //       <DialogTitle id="alert-dialog-title">
            //         <article>Are You Sure You Want To Remove <span style={{ color: "#1976d2" }}>{userMember.firstName}</span> From This Team ?</article>
            //       </DialogTitle>
            //       <DialogActions>
            //         <Button onClick={handleClose}>No</Button>
            //         <Button onClick={() => removeUser(userMember._id)} autoFocus>
            //           Yes
            //         </Button>
            //       </DialogActions>
            //     </Dialog>
            //   </div>
            // </section>
          )
        }) : <h1>None</h1>}
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};
