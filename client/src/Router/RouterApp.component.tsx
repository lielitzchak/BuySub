import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Layout/Header/Header.component";
import Home from "../Components/Pages/Home/Home.component";
import Footer from "../Components/Layout/Footer/Footer.component";
import SignUp from "../Components/Pages/SignUp/SignUp.component";
import Login from "../Components/Pages/Login/Login.component";
import Page404 from "../Components/Pages/Page404/Page404.component";
import Team from "../Components/Pages/Team/Team.component";
import { Admin } from "../Components/Pages/Admin/Admin.component";
import Inventory from "../Components/Pages/Inventory/Inventory.component";
import Setting from "../Components/Pages/Setting/Setting.component";
import Profile from "../Components/Pages/Profile/Profile.component";
import Unauthorized from "../Components/Pages/Unauthorized/Unauthorized.component";
import RequiredAuth from "../Components/Pages/RequiredAuth/RequiredAuth";
import Permission from "../Components/Pages/Permission/Permission";
import CreateTeam from "../Components/Pages/CreateTeam/CreateTeam.componenet";
import JoinTeam from "../Components/Pages/JoinTeam/JoinTeam.component";
import ListToBuy from "../Components/Pages/ListToBuy/ListToBuy.component";
import ContactUs from "../Components/Pages/ContactUs/ContactUs.component";

const RouterApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/** Public Routes **/}
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Unauthorized" element={<Unauthorized />} />

        {/** Private Routes **/}
        <Route element={<RequiredAuth />}>
             <Route path="/Profile" element={<Profile />} />
             <Route path="/Team" element={<Team />}>
               <Route index element={<Inventory />} />
               <Route path="ListToBuy" element={<ListToBuy />} />
               <Route path="Inventory" element={<Inventory />}/>
               <Route path="Setting" element={<Setting />} />
             </Route>

             <Route element={<Permission allowedRole={'Admin'}/>}>
                 <Route path="/Admin" element={<Admin />} />
             </Route>

             <Route path="/CreateTeam" element={<CreateTeam/>}/>
             <Route path="/JoinTeam" element={<JoinTeam/>}/>
             <Route path="/ListToBuy" element={<ListToBuy/>}/>

        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterApp;
