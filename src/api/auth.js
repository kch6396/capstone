import axios from "axios";

const BASE_URL = "http://localhost:5000/users"; // 실제 API 서버 주소를 입력하세요.

export const login = async ({ username, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async ({ username, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  // localStorage.removeItem("token");
  const response = await fetch("/api/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
};
