import jwt_decode from "jwt-decode";
import http from "./httpService";

const tokenKey = "tokenKey";

async function login({ email, password }) {
  const { data: token } = await http.post("http://localhost:5000/auth/login", {
    email,
    password,
  });
  localStorage.setItem(tokenKey, token);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

async function register({ name, email, password }) {
  const { headers } = await http.post("http://localhost:5000/auth/register", {
    name,
    email,
    password,
  });
  localStorage.setItem(tokenKey, headers["x-auth-token"]);
}

function getCurrentUser() {
  const user = jwt_decode(localStorage.getItem(tokenKey));
  return user;
}

export default {
  login,
  logout,
  register,
  currentUser: getCurrentUser,
};
