import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Layout/Header/Header.component";
import Home from "../Components/Pages/Home/Home.component";
import Footer from "../Components/Layout/Footer/Footer.component";
import SignUp from "../Components/Pages/SignUp/SignUp.component";
import Login from "../Components/Pages/Login/Login.component";
import Page404 from "../Components/Pages/Page404/Page404.component";
import CreateOrJoinTeam from "../Components/Pages/CreateOrJoinTeam/CreateOrJoinTeam.component";
import Team from "../Components/Pages/Team/Team.component";
import { Admin } from "../Components/Pages/Admin/Admin.component";
import Inventory from "../Components/Pages/Inventory/Inventory.component";
import Setting from "../Components/Pages/Setting/Setting.component";
import Profile from "../Components/Pages/Profile/Profile.component";

const RouterApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Team" element={<Team />}>
          <Route index element={<Inventory />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Setting" element={<Setting />} />
        </Route>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/CreateOrJoinTeam" element={<CreateOrJoinTeam />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterApp;
