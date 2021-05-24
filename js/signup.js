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


document.querySelector("input[type=submit]").addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelectorAll(".error").forEach((elem,index) => {
        elem.innerText = " ";
    });
    let fullName = document.querySelector("#fullname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let error = 0;

    
    
    let fNameCheck = fullName.split(" ");

    console.log(fNameCheck);

    if(fullName.length == 0){
        document.querySelector("#fullname-error").innerText = "Please input a value";
        error = 1;
    }else if(fNameCheck.length < 2){
        document.querySelector("#fullname-error").innerText = "Please input your first name and second name";
        error = 1;
    }else{
        document.querySelector("#fullname-error").innerText = " ";
    }

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

        let user = {
            fullName:fullName,
            email:email,
            password:password
        }

        if(users != null){
            let found = 0;
            users.forEach((user,index) => {
                if(user.email == email){
                    document.querySelector("#email-error").innerText = "Email already exists!";
                    found = 1;
                    error = 1;
                }
            });
            if(found == 0){
                let users = JSON.parse(localStorage.getItem("users"));
                users.push(user);
                localStorage.setItem("users",JSON.stringify(users));
            }
        }else{
            let users = [];
            users.push(user);
            localStorage.setItem("users",JSON.stringify(users));
        }

        if(error == 0){
            sessionStorage.setItem("user",JSON.stringify(user));
            window.location.href = "index.html";
        }
    }
});