let image = document.querySelector(".items-left-details--productImages--largeView img");
let colors = document.querySelectorAll(".color-option");
let size = (sessionStorage.getItem("size") === null)? -1: sessionStorage.getItem("size");
let sizeselect = document.querySelector(".sizing-select");



sizeselect.addEventListener("change",()=>{
    sessionStorage.setItem("size",sizeselect.selectedIndex);
});

if(size != -1){
    sizeselect.selectedIndex = size;
}

// Gets the color from the session storage and sets the appriopriate image and color selected //

let colorselected = (sessionStorage.getItem("item-image") === null)? -1: sessionStorage.getItem("color");
let navigationLinksProductText = document.querySelectorAll(".navigation__links span")[2];
let productName = document.querySelector(".items-left-details-h2");
let colorTextNavigationLink;
let link;

// If there is a color stored in the session storage, set the image and product name text to the appropriate color // 

if(colorselected!= -1){
    image.setAttribute("src",sessionStorage.getItem("item-image"));
    colors[sessionStorage.getItem("item-index")].checked = true;
    switch(parseInt(sessionStorage.getItem("item-index"))){
        case 0: colorTextNavigationLink = "Pink";break; 
        case 1: colorTextNavigationLink = "Red";break; 
        case 2: colorTextNavigationLink = "Black";break; 
        case 3: colorTextNavigationLink = "White";break; 
        case 4: colorTextNavigationLink = "Brown";break; 
    }
    navigationLinksProductText.innerText = `Beat Solo2 on Ear Headphones - ${colorTextNavigationLink}`;
    productName.innerText = `Beat Solo2 on Ear Headphones - ${colorTextNavigationLink}`;
}

// For selection of colors. If the user selects another color, change the link of the product image and then store the link and color to session storage // 

colors.forEach( (elem,index)=>{
    elem.addEventListener("click", ()=>{
        switch(index){
            case 0: link = "assets/beats/beats__4.png";break;
            case 1: link = "assets/beats/beat-red.png";break;
            case 2: link = "assets/beats/beats__3.png";break;
            case 3: link = "assets/beats/beats__2.png";break;
            case 4: link = "assets/beats/beats__1.png";break;
        }

        switch(index){
            case 0: colorTextNavigationLink = "Pink";break; 
            case 1: colorTextNavigationLink = "Red";break; 
            case 2: colorTextNavigationLink = "Black";break; 
            case 3: colorTextNavigationLink = "White";break; 
            case 4: colorTextNavigationLink = "Brown";break; 
        }

        sessionStorage.setItem("item-image",link);
        sessionStorage.setItem("item-index",index);
        navigationLinksProductText.innerText = `Beat Solo2 on Ear Headphones - ${colorTextNavigationLink}`;
        productName.innerText = `Beat Solo2 on Ear Headphones - ${colorTextNavigationLink}`;
        image.setAttribute("src",link);
    }); 
});



//This section is for the saved/favorited status. If the user hearts the product, save the status to the session storage. //

let heart = document.querySelector(".buttonCartheart-heart i");
let savedStatus = (sessionStorage.getItem("favorite") === null)? 0: sessionStorage.getItem("favorite");
sessionStorage.setItem("favorite",savedStatus);

if(savedStatus == 1){
    heart.setAttribute("class","fas fa-heart");
    heart.style.color = "red";
}

heart.addEventListener("click",()=>{
    if(sessionStorage.getItem("favorite") == 1){
        heart.setAttribute("class","far fa-heart");
        heart.style.color = "#70bbfb";
        sessionStorage.setItem("favorite",0);
    }else if(sessionStorage.getItem("favorite") == 0){
        heart.setAttribute("class","fas fa-heart");
        heart.style.color = "red";
        sessionStorage.setItem("favorite",1);
    }
    
});


let basket = document.querySelectorAll(".header__account--item span")[1];
let totalPriceText = document.querySelector(".header__account--item small");
basket.innerText = (sessionStorage.getItem("items")=== null)? `0 Items` : `${sessionStorage.getItem("items")} Items`;
totalPriceText.innerText = (sessionStorage.getItem("total")=== null)? `$0.00` : `$${sessionStorage.getItem("total")}.00`;


// This section is for the quantity of products, if the user changes the quantity of the product then update the quantity and save it into session

let quantity = document.querySelector(".numOrder--value");
let value = document.querySelector(".numOrder--value__input");

quantity.innerText = (sessionStorage.getItem("product_quantity")===null)? 0 : sessionStorage.getItem("product_quantity");
value.value = (sessionStorage.getItem("product_quantity")===null)? 0 : sessionStorage.getItem("product_quantity");
document.querySelector(".numOrder--sub").addEventListener("click", ()=>{
    if(value.value > 0){
        value.value--;
        quantity.innerText = value.value;
        sessionStorage.setItem("product_quantity",value.value);
    }
});

document.querySelector(".numOrder--add").addEventListener("click", ()=>{
    value.value++;
    quantity.innerText = value.value;
    sessionStorage.setItem("product_quantity",value.value);
});

// add to cart

document.querySelector(".buttonCartheart-add").addEventListener("click", ()=>{
    if(sessionStorage.getItem("add-items")===null){
        
        let item = {
            itemName: productName.innerText,
            quantity: sessionStorage.getItem("product_quantity"),
            image: (sessionStorage.getItem("item-image")!=null)? sessionStorage.getItem("item-image"):"assets/beats/beats__3.png",
            price: 499
        }
        let array = [];
        array.push(item);
        if(item.quantity!=null){
            sessionStorage.setItem("add-items",JSON.stringify(array));
            sessionStorage.setItem("items", (sessionStorage.getItem("items")!= null)? parseInt(sessionStorage.getItem("items") + item.quantity): item.quantity);
            document.querySelectorAll(".header__account--item span")[1].innerText = `$${sessionStorage.getItem("items")} Items`;
            document.querySelector(".header__account--item small").innerText = `$${(item.price * item.quantity) + 20}.00`;
        }
    }
});