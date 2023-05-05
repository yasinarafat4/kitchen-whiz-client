import Footer from "../pages/shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/shared/Navigationbar/Navigationbar";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {/* Loading Spinner Here */}
      {isLoading ? (
        <div
          style={{ marginTop: "400px" }}
          className="d-flex justify-content-center align-items-center mt-5"
        >
          <Spinner className="fs-5 mt-5" animation="border" variant="danger" />
        </div>
      ) : (
        <>
          <NavigationBar></NavigationBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Main;
