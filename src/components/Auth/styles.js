import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
  /* margin-left: 150px; */
`;

export const AuthTitle = styled.h1`
  color: black;
  font-size: 32px;
  margin-bottom: 24px;
  width: 100%;
  text-align: center;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 30px 35px;
  /* border: 1px solid black; */
  border-radius: 4px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 12px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  border: 1px solid #ddd;

  &:focus {
    border-color: #760b87;
    /* box-shadow: 0 0 0 1px #760b87; */
  }
`;

export const StyledButton = styled.button`
  width: 107.7%;
  padding: 15px;
  background-color: #760b87;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #650e72;
  }
`;

export const AuthMessage = styled.p`
  /* width: 100%; */
  border-top: 1px solid #ddd;
  padding: 10px 30px;
  padding-top: 26px;
  color: black;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  a {
    color: #999;
    text-decoration: none;
    &:hover {
      color: #333;
      text-decoration: underline;
    }
  }
`;

export const LoginPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
