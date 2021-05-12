

let popupCloseBtn = document.querySelector('.close');

let title = document.querySelector('.title h1');

title.addEventListener("click",()=>{
    document.querySelector('.newsletter').style.display = "flex";
});

popupCloseBtn.addEventListener("click", ()=>{
    document.querySelector('.newsletter').style.display = "none";
});

let basket = document.querySelectorAll(".header__account--item span")[1];
basket.innerText = (sessionStorage.getItem("items")=== null)? `0 Items` : `${sessionStorage.getItem("items")} Items`;