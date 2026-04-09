class AuthService {
  register(email, password){
    const STORAGE_KEY = 'Users'
    const saveData = {
      email: email,
      password: password
    }

    localStorage.setItem(STORAGE_KEY,JSON.stringify(saveData))
  

  }
  
  login(email, password) {
    const users = JSON.parse(localStorage.getItem("Users")) || [];
    const user = users.find((u) => {
      u.email === email && u.password === password;
    });

    if(user){
      localStorage.setItem("CurrentUser",JSON.stringify(user))
      return { success: true}
    }
    return{ success: false, message: "Invalid credential"}
  }
}
export default AuthService
