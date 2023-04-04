import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Logout from "./containers/Auth/Logout";
import { useSelector } from "react-redux";
import LogoutButton from "./components/common/LogoutButton";
const App = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <LogoutButton />
      {token && <Logout />}
    </>
  );
};

export default App;
