import AuthService from "./services/authService.js";
import Login from "./component/auth/login.js";
import Register from "./component/auth/register.js";

document.addEventListener("DOMContentLoaded", () => {
  const auth = new AuthService();

  const login = new Login(auth);
  const register = new Register(auth);

  // inject references
  login.setRegister(register);
  register.setLogin(login);

  const app = {
    showLogin: () => login.renderLoginUi(),
    showRegister: () => register.renderRegisterUi(),
  };

  // event delegation for dynamic links
  const container = document.querySelector(".container");
  container.addEventListener("click", (e) => {
    if (e.target.id === "to-register") app.showRegister();
    if (e.target.id === "to-login") app.showLogin();
  });

  // render any initial UI safely
  app.showLogin(); // now works
});