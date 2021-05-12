let image = document.querySelector(".items-left-details--productImages--largeView img");

let colors = document.querySelectorAll(".color-option");

colors.forEach( (elem,index)=>{
    elem.addEventListener("click", ()=>{
        let link;
        switch(index){
            case 0: link = "assets/beats/beats__4.png";break;
            case 1: link = "assets/beats/beat-red.png";break;
            case 2: link = "assets/beats/beats__3.png";break;
            case 3: link = "assets/beats/beats__2.png";break;
            case 4: link = "assets/beats/beats__1.png";break;
        }
        image.setAttribute("src",link);
    }); 
});

let heart = document.querySelector(".buttonCartheart-heart i");

heart.addEventListener("click",()=>{
    if(heart.getAttribute("class") == "fas fa-heart"){
        heart.setAttribute("class","far fa-heart");
        heart.style.color = "#70bbfb";
    }else{
        heart.setAttribute("class","fas fa-heart");
        heart.style.color = "red";
    }
    
});
let basket = document.querySelectorAll(".header__account--item span")[1];
basket.innerText = (sessionStorage.getItem("items")=== null)? `0 Items` : `${sessionStorage.getItem("items")} Items`;

let quantity = document.querySelector(".numOrder--value");
let value = document.querySelector(".numOrder--value__input");
document.querySelector(".numOrder--sub").addEventListener("click", ()=>{
    if(value.value > 0){
        value.value--;
        quantity.innerText = value.value;
    }
});

document.querySelector(".numOrder--add").addEventListener("click", ()=>{
    value.value++;
    quantity.innerText = value.value;
});