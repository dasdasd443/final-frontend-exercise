let basket = document.querySelectorAll(".header__account--item span")[1];
let totalPriceText = document.querySelector(".header__account--item small");
basket.innerText = (sessionStorage.getItem("items")=== null)? `0 Items` : `${sessionStorage.getItem("items")} Items`;
totalPriceText.innerText = (sessionStorage.getItem("total")=== null)? `$0.00` : `$${sessionStorage.getItem("total")}.00`;



let navigationLinksProductText = document.querySelectorAll(".navigation__links span")[2];
let colorTextNavigationLink;
let colorselected = (sessionStorage.getItem("item-image") === null)? -1: sessionStorage.getItem("color");
if(colorselected!= -1){
    switch(parseInt(sessionStorage.getItem("item-index"))){
        case 0: colorTextNavigationLink = "Pink";break; 
        case 1: colorTextNavigationLink = "Red";break; 
        case 2: colorTextNavigationLink = "Black";break; 
        case 3: colorTextNavigationLink = "White";break; 
        case 4: colorTextNavigationLink = "Brown";break; 
    }
    navigationLinksProductText.innerText = `Beat Solo2 on Ear Headphones - ${colorTextNavigationLink}`;
}