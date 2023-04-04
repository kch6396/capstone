import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
`;

export const AuthTitle = styled.h1`
  color: black;
  font-size: 32px;
  margin-bottom: 24px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: black;
    box-shadow: 0 0 0 2px black;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: black;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

export const AuthMessage = styled.p`
  color: black;
  font-size: 14px;
  margin-top: 16px;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
