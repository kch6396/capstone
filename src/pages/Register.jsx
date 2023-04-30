import React from "react";
import RegisterContainer from "../containers/Auth/Register";
import styled from "styled-components";

export const RegisterContainerPage = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin-left: 15%;
  transition: all 0.4s;
  @media (max-width: 1280px) {
    margin-left: 0;
  }
`;

const RegisterPage = () => {
  return (
    <RegisterContainerPage>
      <RegisterContainer />
    </RegisterContainerPage>
  );
};

export default RegisterPage;
