//setup variables Register
let inputEmail = document.getElementById("email");
let inputText = document.getElementById("text");
let inputPassword = document.getElementById("password");
let inputSignup = document.getElementById("signup");

inputSignup.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (
    inputEmail.value === "" ||
    inputText.value === "" ||
    inputPassword.value === ""
  ) {
    alert("Please fill data");
  } else {
    localStorage.setItem("useremail", inputEmail.value);
    localStorage.setItem("username", inputText.value);
    localStorage.setItem("userpassword", inputPassword.value);
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
}
// function emptyVal() {
//   inputEmail.value = "";
//   inputText.value = "";
//   inputPassword.value = "";
//   inputEmail.focus();
// }
