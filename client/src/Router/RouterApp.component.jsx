import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from '../Components/Layout/Header/Header.component';
import Home from '../Components/Pages/Home/Home.component';
import Footer from '../Components/Layout/Footer/Footer.component';
import  SignUp  from '../Components/Pages/SignUp/SignUp.component';
import Login from '../Components/Pages/Login/Login.component';
import Page404 from '../Components/Pages/Page404/Page404.component';
import CreateOrJoinTeam from '../Components/Pages/CreateOrJoinTeam/CreateOrJoinTeam.component';
import Team from '../Components/Pages/Team/Team.component';
import { Admin } from '../Components/Pages/Admin/Admin.component';
import Inventory from '../Components/Pages/Inventory/Inventory.component';
import Setting from '../Components/Pages/Setting/Setting.component';



export default function RouterApp() {
  return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/SignUp" element={<SignUp/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Team" element={<Team/>}>
                   <Route index element={<Inventory/>} />
                   <Route path="Inventory" element={<Inventory/>} />
                   <Route path="Setting" element={<Setting/>} />
                </Route>
                <Route exact path="/Admin" element={<Admin/>}/>
                <Route exact path="/CreateOrJoinTeam" element={<CreateOrJoinTeam/>}/>
                <Route exact path="*" element={<Page404/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
  )
}
