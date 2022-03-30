import { useContext, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { changeUserPassword, updateUser, } from "../../../Services/UserService.service";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { TextField } from "@mui/material";



export default function Profile() {
  const { auth } = useContext(authContext);
  const [userInfo, setUserInfo] = useState({});
  const [userPasswordInfo, setUserPasswordInfo] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [openPopUpUpdateProfile, setopenPopUpUpdateProfile] = useState(false);
  const [openPopUpUpdatePassword, setopenPopUpUpdatePassword] = useState(false);


  let userInfoToUpdate = (e) => {
    userInfo[e.target.name] = e.target.value;
  };

  let saveUpdatedUserInfo = (e) => {
    e.preventDefault();
    setUserInfo(userInfo);
    updateUser(auth.id, userInfo)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let userPasswordInfoToUpdate = (e) => {
    userPasswordInfo[e.target.name] = e.target.value;
  };

  let updateUserPassword = (e) => {
    e.preventDefault();
    setUserPasswordInfo(userPasswordInfo);

    changeUserPassword(auth.id, userPasswordInfo)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleClickOpen = () => {
    setopenPopUpUpdateProfile(true);
  };

  const handleClose = () => {
    setopenPopUpUpdateProfile(false);
  };

  const handleClickOpenPasswordPopUp = () => {
    setopenPopUpUpdatePassword(true);
  };

  const handleClosePasswordPopUp = () => {
    setopenPopUpUpdatePassword(false);
  };

  return (


    < div className="containerToAllProfilePage" >

      <section className="buttonsContainer">
        {openPopUpUpdateProfile ?
          <Dialog
            fullScreen={fullScreen}
            open={setopenPopUpUpdateProfile}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Update Profile"}
            </DialogTitle>
            <form action="" autoComplete="on">

              <DialogContent>
                <DialogContentText>

                  <TextField
                    autoFocus
                    margin="dense"
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    name="firstName"
                    onChange={userInfoToUpdate}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    name="lastName"
                    onChange={userInfoToUpdate}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    name="email"
                    onChange={userInfoToUpdate}
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    // label="Expiration Date"
                    type="date"
                    fullWidth
                    variant="standard"
                    name="expirationDate"
                    onChange={userInfoToUpdate}
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    label="Image"
                    type="text"
                    fullWidth
                    variant="standard"
                    name="image"
                    onChange={userInfoToUpdate}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Birth Of Date"
                    type="text"
                    fullWidth
                    variant="standard"
                    name="birthOfDate"
                    onChange={userInfoToUpdate}
                  />

                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Cancel
                </Button>
                <Button onClick={saveUpdatedUserInfo} autoFocus>
                  Update
                </Button>
              </DialogActions>
            </form>
          </Dialog> :

          <Button variant="contained" onClick={handleClickOpen}>Update Profile</Button>}


        {openPopUpUpdatePassword ?
          <Dialog
            fullScreen={fullScreen}
            open={setopenPopUpUpdatePassword}
            onClose={handleClosePasswordPopUp}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Update Profile"}
            </DialogTitle>
            <form action="" autoComplete="on">

              <DialogContent>
                <DialogContentText>

                  <TextField
                    autoFocus
                    margin="dense"
                    // label="Confirm Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    required
                    placeholder="current password"
                    name="confirmPassword"
                    onChange={userPasswordInfoToUpdate}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    // label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    required
                    placeholder="new password"
                    name="password"
                    onChange={userPasswordInfoToUpdate}
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClosePasswordPopUp}>
                  Cancel
                </Button>
                <Button onClick={updateUserPassword} autoFocus>
                  Update
                </Button>
              </DialogActions>
            </form>
          </Dialog> :

          <Button variant="contained" onClick={handleClickOpenPasswordPopUp}>Update Password</Button>}
      </section>

      <img className="background" src="https://unpkg.com/css-doodle@0.26.3/css-doodle.min.js"/>
      

      <section className="cardProfile">
        <img src={auth.userImage} className="card-image" />
        <h1 style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)"}}>{auth.firstName}    {auth.lastName}</h1>
        <h4><span className="cardTitle"> Email :</span> {auth.email}</h4>
        <h4><span className="cardTitle">Group Name : </span>{auth.groupName ? auth.groupName : "None"}</h4>
      </section>
    </div >
  );
}
