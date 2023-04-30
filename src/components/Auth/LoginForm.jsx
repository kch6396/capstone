import React, { useEffect, useRef, useState } from "react";
import { AuthForm, StyledButton, StyledInput } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, setToken } from "../../modules/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/models");
    }
  }, [navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = null;
    try {
      await dispatch(loginRequest(inputs));
      token = localStorage.getItem("token");
      if (token !== null) {
        navigate("/models");
      }
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
        placeholder="이메일을 입력하세요."
        required
      />
      <StyledInput
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        placeholder="비밀번호을 입력하세요."
        required
      />
      <StyledButton type="submit">로그인</StyledButton>
    </AuthForm>
  );
};

export default LoginForm;
