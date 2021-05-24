/*document.querySelector(".show-password").addEventListener("click",()=>{
    let password = document.querySelector("#password");
    let icon = document.querySelector("i");
    if(password.type == "password"){
        password.type = "text";
        icon.className = "fas fa-eye-slash show-password";
    }else if(password.type == "text"){
        password.type = "password";
        icon.className = "fas fa-eye show-password";
    }
});*/


document.querySelector("input[type=submit]").addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelectorAll(".error").forEach((elem,index) => {
        elem.innerText = " ";
    });
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let error = 0;

    if(email.length == 0){
        document.querySelector("#email-error").innerText = "Please input an email";
        error = 1;
    }else{
        document.querySelector("#email-error").innerText = " ";
    }

    if(password.length < 8){
        document.querySelector("#password-error").innerText = "The password must be at least 8 characters!";
        error = 1;
    }else{
        document.querySelector("#password-error").innerText = " ";
    }

    if(error == 0){
        let users = localStorage.getItem("users");
        users = JSON.parse(users);

        if(users != null){
            let found = 0;
            users.forEach((user,index) => {
                if(user.email == email && user.password == password){
                    sessionStorage.setItem("user",JSON.stringify(user));
                    window.location.href = "index.html";
                    found = 1;
                }else if(user.email == email && user.password !=password){
                    document.querySelector("#password-error").innerText = "The password is incorrect";
                }
            });
            if(found == 0){
                document.querySelector("#email-error").innerText = "Email is not found!";
            }
        }
    }
});