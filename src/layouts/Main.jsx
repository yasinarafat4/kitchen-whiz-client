import Footer from "../pages/shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/shared/Navigationbar/Navigationbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from "react-bootstrap";

const Main = () => {
  // loading spinner here
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div
        style={{ marginTop: "300px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner className="fs-6" animation="border" variant="danger" />
      </div>
    );
  }
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
