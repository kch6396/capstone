import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Logout from "./containers/Auth/Logout";
import { useSelector } from "react-redux";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import { useEffect } from "react";

const App = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <LogoutButton /> */}
      {/* {token && <Logout />} */}
    </div>
  );
};

export default App;
