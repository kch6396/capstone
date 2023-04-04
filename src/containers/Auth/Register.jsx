import React from "react";
import RegisterForm from "./../../components/Auth/RegisterForm";
import {
  AuthContainer,
  AuthTitle,
  AuthMessage,
} from "./../../components/Auth/styles";

const RegisterPage = () => {
  return (
    <AuthContainer>
      <AuthTitle>회원가입</AuthTitle>
      <RegisterForm />
      <AuthMessage>
        이미 회원이신가요? <a href="/">로그인</a>
      </AuthMessage>
    </AuthContainer>
  );
};

export default RegisterPage;
