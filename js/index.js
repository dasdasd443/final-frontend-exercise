

let popupCloseBtn = document.querySelector('.close');

let title = document.querySelector('.title h1');

if(sessionStorage.getItem("newsletter") == 1){
    document.querySelector('.newsletter').style.display = "none";
}

title.addEventListener("click",()=>{
    document.querySelector('.newsletter').style.display = "flex";
});

popupCloseBtn.addEventListener("click", ()=>{
    document.querySelector('.newsletter').style.display = "none";
    sessionStorage.setItem("newsletter",1);
});

let basket = document.querySelectorAll(".header__account--item span")[1];
let totalPriceText = document.querySelector(".header__account--item small");
basket.innerText = (sessionStorage.getItem("items")=== null)? `0 Items` : `${sessionStorage.getItem("items")} Items`;
totalPriceText.innerText = (sessionStorage.getItem("total")=== null)? `$0.00` : `$${sessionStorage.getItem("total")}.00`;