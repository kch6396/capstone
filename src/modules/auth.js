import { login, logout, register } from "../api/auth";

const LOGIN_REQUEST = "auth/LOGIN_REQUEST";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";
const REGISTER_REQUEST = "auth/REGISTER_REQUEST";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";
const LOGOUT = "auth/LOGOUT";
const SET_TOKEN = "auth/SET_TOKEN";

export const loginRequest = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await login(credentials);
    if (response && response.access_token) {
      localStorage.setItem("token", response.access_token);
      dispatch({ type: LOGIN_SUCCESS, payload: response.access_token });
    } else {
      throw new Error("Token is undefined.");
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const registerRequest = (credentials) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await register(credentials);
    if (response && response.access_token) {
      localStorage.setItem("token", response.access_token);
      dispatch({ type: REGISTER_SUCCESS, payload: response.access_token });
    } else {
      throw new Error("Token is undefined.");
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};

export const logoutRequest = () => async (dispatch) => {
  try {
    const response = await logout();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  // dispatch(logout());
  dispatch({ type: LOGOUT });
};

export const setToken = (token) => (dispatch) => {
  // localStorage.setItem("token", token);
  console.log(token);
  dispatch({ type: SET_TOKEN, payload: token });
};

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, loading: false, token: action.payload };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...initialState };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default auth;
