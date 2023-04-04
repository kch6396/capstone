import React, { useState } from "react";
import { AuthForm, StyledButton, StyledInput } from "./styles";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../modules/auth";
import LogoutButton from "../common/LogoutButton";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginRequest(inputs));
      navigate("/register");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="username"
        value={inputs.username}
        onChange={handleChange}
        placeholder="아이디"
        required
      />
      <StyledInput
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
      />
      <StyledButton type="submit">로그인</StyledButton>
      {/* <Link to="/register">회원가입</Link> */}
    </AuthForm>
  );
};

export default LoginForm;
