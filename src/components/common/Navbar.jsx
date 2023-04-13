import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logout from "../../containers/Auth/Logout";
import { useEffect, useState } from "react";
import { logout } from "../../api/auth";
import { setToken } from "../../modules/auth";

const NavContainer = styled.div`
  background-color: #f8f9fa;
  box-shadow: 0px 2px 5px 0 rgb(0, 0, 0, 70%);
  z-index: 1;
`;

const NavItem = styled.li`
  font-size: 35px;
  padding: 20px 110px 0px 10px;
  color: #49277f;
`;

const NavItemAuth = styled.li`
  /* font-size: 14px; */
  padding: 10px 110px 10px 15px;
  color: #49277f;
`;

export const AuthLink = styled(Link)`
  font-size: 14px;
  /* padding: 0px 100px 10px 10px; */
  color: #999;
  text-decoration: none;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

const Navbar = () => {
  // const { token } = useSelector((state) => state.auth);
  // // useEffect(() => {
  // //   token = localStorage.getItem("token");
  // // }, []);
  // console.log(token);
  // const email = localStorage.getItem("email");
  // const onClick = () => {
  //   navigate("/");
  // };
  // let [token, setToken] = useState(null);

  // useEffect(() => {
  // let token2 = localStorage.getItem("token");
  // setToken(token2);

  // const [getToken, setGetToken] = useState(null);
  // }, []);
  // setGetToken(localStorage.getItem("token"));
  // useEffect(() => {
  //   token = localStorage.getItem("token");
  // }, [token]);
  // const [hasToken, setHasToken] = useState(localStorage.getItem("token"));
  const email = localStorage.getItem("email");
  // const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  // const { token } = useSelector((state) => state.auth.token);
  // useEffect(() => {
  //   // localStorage에서 token 값 가져오기
  //   const storedToken = localStorage.getItem("token");
  //   // if (storedToken) {
  //   //   // 가져온 token 값이 존재하면, store에 저장
  //   //   // dispatch(setToken(storedToken));
  //   //   console.log("home");
  //   // }
  // }, [dispatch, token]);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, []);

  // const [token, setToken] = useState(null);
  // // const token = true;
  // useEffect(() => {
  //   // localStorage에서 token 값의 변경을 감지
  //   const onStorageChange = () => {
  //     setHasToken(!!localStorage.getItem("token"));
  //   };

  //   window.addEventListener("storage", onStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", onStorageChange);
  //   };
  // }, []);
  return (
    <NavContainer>
      <NavItem>
        {token ? (
          <Link to="/home">NeuralDrop</Link>
        ) : (
          <Link to="/">NeuralDrop</Link>
        )}
      </NavItem>
      {token && <p>{email}</p>}
      <NavItemAuth>
        {token ? <Logout /> : <AuthLink to="/register">회원가입</AuthLink>}
      </NavItemAuth>
    </NavContainer>
  );
};

export default Navbar;
