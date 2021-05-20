document.querySelector(".show-password").addEventListener("click",()=>{
    let password = document.querySelector("#password");
    let icon = document.querySelector("i");
    if(password.type == "password"){
        password.type = "text";
        icon.className = "fas fa-eye-slash show-password";
    }else if(password.type == "text"){
        password.type = "password";
        icon.className = "fas fa-eye show-password";
    }
});