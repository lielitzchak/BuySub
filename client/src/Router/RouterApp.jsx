import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from '../Components/Layout/Header/Header';
import Home from '../Components/Pages/Home.component';
import Footer from '../Components/Layout/Footer/Footer';
import { Register } from '../Components/Pages/Register.component';
import Login from '../Components/Pages/Login.component';
import Inventory from '../Components/Pages/Inventory/Inventory';
import Page404 from '../Components/Pages/Page404/Page404';
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
