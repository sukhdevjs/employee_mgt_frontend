import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const signup = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios.post(API_URL + "signin", {
    username,
    password,
  });
};

const AuthService = {
  signup,
  login,
};

export default AuthService;
