import axios from "axios";
import qs from "qs";

const BASE_URL = "http://192.168.123.2:6800"; // 실제 API 서버 주소를 입력하세요.

export const login = async ({ username, password }) => {
  try {
    const data = qs.stringify({ username, password });
    const response = await axios.post(`${BASE_URL}/auth/jwt/login`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const token = response.data.access_token;
    localStorage.setItem("token", token);

    // Get user email and store it in localStorage
    const emailResponse = await axios.get(`${BASE_URL}/auth/who`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const email = emailResponse.data.email;
    localStorage.setItem("email", email);
    console.log(emailResponse);
    console.log(response);
    return response.data;
  } catch (error) {
    alert("아이디나 비밀번호를 다시 확인해주세요.");
    console.log(error);
  }
};
export const register = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      email,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const logout = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found in localStorage.");
  }
  try {
    const response = await fetch(`${BASE_URL}/auth/jwt/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    localStorage.clear();
  } catch (error) {
    console.log(error);
  }

  // if (response.ok) {
  //   localStorage.clear();
  //   // localStorage.removeItem("token");
  //   // localStorage.removeItem("email");
  // } else {
  //   throw new Error("Logout failed.");
  // }

  // const data = await response.json();
  // return data;
};
