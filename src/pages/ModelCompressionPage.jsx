import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../modules/auth";

const ModelCompressionPage = () => {
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
  return <div>model</div>;
};

export default ModelCompressionPage;
