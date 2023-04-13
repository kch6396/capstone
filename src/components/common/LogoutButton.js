import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../api/auth";
import { StyledButton } from "../Auth/styles";
import { Link } from "react-router-dom";
import { AuthLink } from "./Navbar";
import { logoutRequest } from "../../modules/auth";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch({ type: "auth/LOGOUT" });
    dispatch(logoutRequest);
  };

  return (
    <div>
      <AuthLink onClick={handleLogout}>로그아웃</AuthLink>
    </div>
  );
};

export default LogoutButton;
