import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from '../Components/Layout/Header/Header.component';
import Home from '../Components/Pages/Home/Home.component';
import Footer from '../Components/Layout/Footer/Footer.component';
import  SignUp  from '../Components/Pages/SignUp/SignUp.component';
import Login from '../Components/Pages/Login/Login.component';
import Inventory from '../Components/Pages/Inventory/Inventory.component';
import Page404 from '../Components/Pages/Page404/Page404.component';
import AuthProvider from '../Context/AuthProvider.component'
import CreateOrJoinTeam from '../Components/Pages/CreateOrJoinTeam/CreateOrJoinTeam.component';



export default function RouterApp() {
  return(
      <AuthProvider>
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/SignUp" element={<SignUp/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Inventory" element={<Inventory/>}/>
                <Route exact path="/CreateOrJoinTeam" element={<CreateOrJoinTeam/>}/>
                <Route exact path="*" element={<Page404/>}/>
            </Routes>
            <Footer/>
        </Router>
       </AuthProvider>
  )
}
