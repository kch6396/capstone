import React from "react";
import LoginContainer from "../containers/Auth/Login";
import Navbar from "../components/common/Navbar";
import styled from "styled-components";

export const LoginContainerPage = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin-left: 15%;
  transition: all 0.4s;
  @media (max-width: 1280px) {
    margin-left: 0;
  }
`;

const LoginPage = () => {
  return (
    <LoginContainerPage>
      <LoginContainer />
    </LoginContainerPage>
  );
};

export default LoginPage;
