import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer/Footer";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
