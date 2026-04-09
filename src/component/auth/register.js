import "../../style.css";

class Register {
  constructor(authService) {
    this.authService = authService;
  }

  setLogin(login) {
    this.login = login;
  }

  renderRegisterUi() {
   
    const container = document.querySelector(".container");
    // container.innerHTML = "";
    if (!container){
      console.error('container not found')
      return
    }
 
    container.innerHTML = `
    <div id="register-box" class="box active">
      <h2>Register</h2>
      <form id = "registration-form">
      <input id="inputRegEmail" type="email" placeholder="Email">
      <input id="inputRegPass" type="password" placeholder="Password">
      <button type="submit">Register</button>
      <p>Already have an account? <span id="to-login">Login</span></p>
      </form>
    </div>

    `;

   
  

    this.handleSubmitRegister();
    this.handleClick();
  }

  handleSubmitRegister() {
    const register = document.getElementById("registration-form");

    register.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputEmail = document.querySelector("#inputRegEmail").value;
      const inputPass = document.querySelector("#inputRegPass").value;

      const result = this.authService.register(inputEmail, inputPass);

      if (result) {
        console.log("register sucessful");
        // direct to login
      } else {
        // error message
        console.log("something wrong");
      }
    });
  }

  handleClick() {
    const toLoginBtn = document.querySelector("#to-login");

    toLoginBtn.addEventListener("click", () => {
      const registerBox = document.querySelector("#register-box")
      if(registerBox) registerBox.classList.remove('active')

      this.login.renderLoginUi();
    });
  }
}

export default Register;
