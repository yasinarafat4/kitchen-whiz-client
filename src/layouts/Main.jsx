import Footer from "../pages/shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/shared/Navigationbar/Navigationbar";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
