import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../api/auth";
import { StyledButton } from "../Auth/styles";
import { Link, useNavigate } from "react-router-dom";
import { AuthLink } from "./Navbar";
import { logoutRequest } from "../../modules/auth";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    dispatch({ type: "auth/LOGOUT" });
    dispatch(logoutRequest);
    // navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        whiteSpace: "nowrap",
      }}
    >
      <AuthLink onClick={handleLogout}>로그아웃</AuthLink>
    </div>
  );
};

export default LogoutButton;
