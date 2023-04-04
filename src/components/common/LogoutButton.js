import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../api/auth";
import { StyledButton } from "../Auth/styles";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch({ type: "auth/LOGOUT" });
  };

  return <StyledButton onClick={handleLogout}>로그아웃</StyledButton>;
};

export default LogoutButton;
