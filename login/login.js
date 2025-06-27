
let loginPage = document.getElementById("login-page");
let registerPage = document.getElementById("register-page")

let registerBtn = document.getElementById("register-btn");
let cancel = document.getElementById("cancel");


let loginBtn = document.getElementById("register");

registerBtn.addEventListener("click", function () {
    loginPage.style.display = "none";
    registerPage.style.display = "flex"

});
cancel.addEventListener("click", function (){
     loginPage.style.display = "flex";
    registerPage.style.display = "none"
    
})