import React, { useState } from "react";
import { AuthForm, StyledButton, StyledInput } from "./styles";
import { useDispatch } from "react-redux";
import { registerRequest } from "../../modules/auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.password !== inputs.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await dispatch(registerRequest(inputs));
      navigate("/");
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
      <StyledInput
        type="password"
        name="passwordConfirm"
        value={inputs.passwordConfirm}
        onChange={handleChange}
        placeholder="비밀번호 확인"
        required
      />
      <StyledButton type="submit">회원가입</StyledButton>
      {/* <Link to="/">로그인</Link> */}
    </AuthForm>
  );
};

export default RegisterForm;
