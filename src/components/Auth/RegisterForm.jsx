import React, { useState } from "react";
import { AuthForm, StyledButton, StyledInput } from "./styles";
import { useDispatch } from "react-redux";
import { registerRequest } from "../../modules/auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(inputs.email)) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }
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

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="email"
        value={inputs.email}
        onChange={handleChange}
        placeholder="이메일"
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
      <StyledButton style={{ width: "115.9%" }} type="submit">
        회원가입
      </StyledButton>
      {/* <Link to="/">로그인</Link> */}
    </AuthForm>
  );
};

export default RegisterForm;
