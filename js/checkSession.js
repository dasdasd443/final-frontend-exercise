let user = sessionStorage.getItem("user");

user = JSON.parse(user);

if(user!=null){
    document.querySelector(".user").innerText = user.fullName;
    document.querySelector(".user").addEventListener("click", ()=>{
        sessionStorage.removeItem("user");
        window.location.href = "index.html";
    });
}