import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../modules/auth";
import TaskManagementForm from "../components/common/TaskManagementForm";
import styled from "styled-components";
import Model from "../containers/Model/Model";

export const TaskManagementFormPage = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin-left: 15%;
  transition: all 0.4s;
  @media (max-width: 1280px) {
    margin-left: 0;
  }
`;

const TaskManagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      dispatch(setToken(storedToken));
    } else {
      navigate("/");
    }
  }, [dispatch, navigate, token]);

  return (
    <TaskManagementFormPage>
      <Model />
    </TaskManagementFormPage>
  );
};

export default TaskManagement;
