let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("signin");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("userpassword");
loginBtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please fill data");
  } else {
    if (
      getUser &&
      getUser.trim() === username.value.trim() &&
      getPassword &&
      getPassword === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    }
  }
}
