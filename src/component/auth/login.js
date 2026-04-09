import "../../style.css";

class Login {
  constructor(authService) {
    this.authService = authService;
  }

  setRegister(Register) {
    this.register = Register;
  }

  renderLoginUi() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    container.innerHTML = `
  
    <div id="login-box" class="box active">
      <h2>Login</h2>
      <form id= "loginForm">
      <input id="inputEmail" type="email" placeholder="Email">
      <input id="inputPass" type="password" placeholder="Password">
      <button type="submit">Login</button>
      <p>Don't have an account? <span id="to-register">Register</span></p>
      </form>
    </div>
    
    `;

    // container.addEventListener("click", (e) => {
    //   if (e.target.id === "to-register") {
    //     console.log("click");
    //     this.register.renderRegisterUi();
    //   }
    // });

    this.handleSumbit();
    this.handleClick();
  }

  handleSumbit() {
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputEmail = document.getElementById("inputEmail").value;
      const inputPass = document.getElementById("inputPass").value;

      const result = this.authService.login(inputEmail, inputPass);

      if (result.success) {
        console.log("login sucessful");
        // direct to dashboard
      } else {
        // error message
        console.log("something wrong");
      }
    });
  }

  handleClick() {
    const toRegister = document.querySelector("#to-register");
    toRegister.addEventListener("click", () => {

      this.register.renderRegisterUi();
    });
  }
}
export default Login;
