import React, { useEffect, useRef, useState } from "react";
import { AuthForm, StyledButton, StyledInput } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, setToken } from "../../modules/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    // if (storedToken) {
    //   dispatch(setToken(storedToken));
    // } else {
    //   navigate("/home");
    // }
    console.log("login");
    if (storedToken) {
      navigate("/home");
    }
  }, [navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = null;
    try {
      await dispatch(loginRequest(inputs));
      token = localStorage.getItem("token");
      if (token !== null) {
        navigate("/home");
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
      {/* <Link to="/register">회원가입</Link> */}
    </AuthForm>
  );
};

export default LoginForm;
