import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from '../Components/Layout/Header/Header.component';
import Home from '../Components/Pages/Home/Home.component';
import Footer from '../Components/Layout/Footer/Footer.component';
import { Register } from '../Components/Pages/Register/Register.component';
import Login from '../Components/Pages/Login/Login.component';
import Inventory from '../Components/Pages/Inventory/Inventory.component';
import Page404 from '../Components/Pages/Page404/Page404.component';
// import AuthProvider from '../Context/AuthProvider'



export default function RouterApp() {
  return(
    //   <AuthProvider>
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Register" element={<Register/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Inventory" element={<Inventory/>}/>
                <Route exact path="*" element={<Page404/>}/>
            </Routes>
            <Footer/>
        </Router>
    //   </AuthProvider>
  )
}
