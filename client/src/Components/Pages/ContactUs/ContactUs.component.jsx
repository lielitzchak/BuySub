import { useContext, useState } from "react"
import { authContext } from "../../../Context/AuthProvider.component"
import { sendEmail } from "../../../Services/UserService.service"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function ContactUs() {
  const { auth } = useContext(authContext)
  const [emailInfoToSend, setEmailInfoToSend] = useState({});

  const emailInfo = (e) => {
    emailInfoToSend[e.target.name] = e.target.value;
  };


  let sendEmailToDepartment = (e) => {
    e.preventDefault();
    setEmailInfoToSend(emailInfoToSend)
    console.log({ email: auth.email, ...emailInfoToSend });

    sendEmail(auth.email ? auth.email : emailInfoToSend.email, emailInfoToSend).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <section className={"contactUsContainer"}>
      <h1 className="contactUsTitle">
        Contact Us
      </h1>
      <Box className="contactUsForm"
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
        }}
        noValidate
        autoComplete="on"
      >
        {auth.email ? "" :
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            name="email"
            onChange={emailInfo}
            fullWidth
          />
        }

        <TextField
          id="filled-basic"
          label="Subject"
          variant="filled"
          name="subject"
          onChange={emailInfo}
          fullWidth
        />
        <TextField
          id="filled-basic"
          label="Text To Send"
          variant="filled"
          name="text"
          onChange={emailInfo}
          fullWidth
        />
        <Button variant="contained" onClick={sendEmailToDepartment}>Contained</Button>
      </Box>
      <div  className="contactUsBackground"></div>
    </section>
  )
}
