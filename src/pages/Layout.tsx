import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Footer from "../components/Footer.tsx";

const Layout = () =>{
    return <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster position="top-right"
        />

    </>
}

export default Layout;