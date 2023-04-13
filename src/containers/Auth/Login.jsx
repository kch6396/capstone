import React from "react";
import LoginForm from "./../../components/Auth/LoginForm";
import {
  AuthContainer,
  AuthTitle,
  AuthMessage,
} from "./../../components/Auth/styles";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const DescriptionForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 80px; */
  /* margin: 50px; */
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  padding: 5rem 5rem 5rem 2rem;
  margin: 5rem;
`;

const MainDescription = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 0;
`;

const SubDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0;
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  background-color: #ddd;
`;

const LoginPage = () => {
  return (
    <LoginContainer style={{ display: "flex", width: "100%", height: "100%" }}>
      <Navbar />
      <DescriptionForm>
        <DescriptionContainer>
          <MainDescription>Welcome to NeuralDrop!</MainDescription>
          <SubDescription>
            This is an incredible authentication system with production level
            features!
          </SubDescription>
          <Hr />
          <p style={{ marginBottom: "50px" }}>
            Please login to start NeuralDrop
          </p>
        </DescriptionContainer>
      </DescriptionForm>
      <AuthContainer>
        <AuthTitle>로그인</AuthTitle>
        <div
          style={{
            margin: "0 auto",
            borderRadius: "6px",
            backgroundColor: "#f6f5f0",
            boxShadow: "2px 2px 20px rgba(0,0,0,0.3)",
            color: "#555",
            width: "100%",
            // marginLeft: "100px",
          }}
        >
          <div
            style={{
              padding: "30px 50px",
              fontSize: "18px",
              textAlign: "center",
              borderBottom: "1px solid #ddd",
              whiteSpace: "nowrap",
            }}
          >
            <strong style={{ fontWeight: "700", color: "#760b87" }}>
              Welcome!<> </>
            </strong>
            <strong style={{ fontWeight: "700", color: "#555" }}>
              NeuralDrop에 오신 것을 환영합니다.
            </strong>
          </div>
          <LoginForm />
          <AuthMessage>
            아직 회원이 아니신가요? <Link to="/register">회원가입</Link>
          </AuthMessage>
        </div>
        <div style={{ height: "88px" }}></div>
      </AuthContainer>
      {/* </div> */}
    </LoginContainer>
  );
};

export default LoginPage;
