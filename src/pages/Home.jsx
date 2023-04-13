import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import { useNavigate } from "react-router-dom";
import TaskTable from "../components/common/TaskTable";
import HomeForm from "../components/common/HomeForm";
import Logout from "../containers/Auth/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../modules/auth";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // const token = localStorage.getItem("token");

  useEffect(() => {
    // localStorage에서 token 값 가져오기
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // 가져온 token 값이 존재하면, store에 저장
      dispatch(setToken(storedToken));
    } else {
      navigate("/");
    }
    // console.log(token);
    console.log("home");
  }, [dispatch, navigate, token]);

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      {/* <Logout /> */}
      <Navbar />
      <HomeForm />
    </div>
  );
};

export default Home;
