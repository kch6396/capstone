import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Authentication from "./components/common/Authentication";
import TaskManagement from "./pages/TaskManagement";
import CreateTaskPage from "./pages/CreateTaskPage";
import ModelCompressionPage from "./pages/ModelCompressionPage";
import DatasetPage from "./pages/DatasetPage";

const App = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Authentication>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/models" element={<TaskManagement />} />
          <Route path="/models/upload" element={<CreateTaskPage />} />
          <Route path="/modelcompression" element={<ModelCompressionPage />} />
          <Route path="/datasets" element={<DatasetPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Authentication>
      {/* <LogoutButton /> */}
      {/* {token && <Logout />} */}
    </div>
  );
};

export default App;
