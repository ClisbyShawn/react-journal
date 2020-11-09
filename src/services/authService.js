import http from "./httpService";

const tokenKey = "tokenKey";

async function login({ email, password }) {
  try {
    const { data: token } = await http.post(
      "http://localhost:5000/auth/login",
      {
        email,
        password,
      }
    );
    localStorage.setItem(tokenKey, token);
  } catch (error) {
    const { name, message } = error.response.data;
    console.log(`${name}: ${message}`);
  }
}

function logout() {
  localStorage.removeItem(tokenKey);
}

async function register({ name, email, password }) {
  try {
    const { headers } = await http.post("http://localhost:5000/auth/register", {
      name,
      email,
      password,
    });
    localStorage.setItem(headers["x-auth-token"]);
  } catch (error) {
    const { name, message } = error.response.data;
    console.log(`${name}: ${message}`);
  }
}

function getCurrentUser() {}

export default {
  login,
  logout,
  register,
  currentUser: getCurrentUser,
};
