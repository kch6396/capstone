import React from "react";
import RegisterForm from "./../../components/Auth/RegisterForm";
import {
  AuthContainer,
  AuthTitle,
  AuthMessage,
} from "./../../components/Auth/styles";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthContainer>
      <AuthTitle>회원가입</AuthTitle>
      <RegisterForm />
      <AuthMessage>
        이미 회원이신가요? <Link to="/">로그인</Link>
      </AuthMessage>
    </AuthContainer>
  );
};

export default RegisterPage;
