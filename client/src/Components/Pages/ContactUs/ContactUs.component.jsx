import { useContext, useState } from "react"
import { authContext } from "../../../Context/AuthProvider.component"
import { sendEmail } from "../../../Services/UserService.service"

export default function ContactUs() {
  const {auth} = useContext(authContext) 
  const [emailInfoToSend, setEmailInfoToSend] = useState({});
  
  const emailInfo = (e) => {
    emailInfoToSend[e.target.name] = e.target.value;
};
 

  let sendEmailToDepartment = (e) => {
    e.preventDefault();
    setEmailInfoToSend(emailInfoToSend)
    console.log({email :auth.email,...emailInfoToSend});

    sendEmail(auth.email,emailInfoToSend).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
  }  


  return (
    <>
     <div>ContactUs</div>
    <form onSubmit={sendEmailToDepartment}>
                
        <label>subject</label>
        <input type="text" name="subject" onChange={emailInfo}/>
        
        <label>text To Send</label>
        <input type="text" name="text" onChange={emailInfo}/>

        <button>Send</button>
    </form>

    </> 
  )
}
