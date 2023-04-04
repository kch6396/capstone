import React from "react";
import LoginForm from "./../../components/Auth/LoginForm";
import {
  AuthContainer,
  AuthTitle,
  AuthMessage,
} from "./../../components/Auth/styles";

const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthTitle>로그인</AuthTitle>
      <LoginForm />
      <AuthMessage>
        아직 회원이 아니신가요? <a href="/register">회원가입</a>
      </AuthMessage>
    </AuthContainer>
  );
};

export default LoginPage;
