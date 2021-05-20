
//add products to checkout

let array = JSON.parse(sessionStorage.getItem("add-items"));

if(array!= null){
    array.forEach((elem,index) => {
        let section = document.createElement("section");
        section.className = "items-list__item";

        let name = document.createElement("section");
        name.className = "items-list__item--name";
        let deletesection = document.createElement("section");

        let h1name = document.createElement("h1");
        h1name.innerText = elem.itemName;

        deletesection.className = "items-list__item--name__delete";
        let deleteBtn = document.createElement("i");
        deleteBtn.className = "fas fa-times";
        let deleteBtnBackground = document.createElement("span");
        deleteBtnBackground.className = "background";
        deletesection.appendChild(deleteBtn);
        deletesection.appendChild(deleteBtnBackground);

        let imagecontainer = document.createElement("section");
        imagecontainer.className = "image-container";
        let image = document.createElement("img");
        image.setAttribute("src",elem.image);
        imagecontainer.appendChild(image);

        let h1price = document.createElement("h1");
        h1price.innerText = `$${elem.price}`;

        let hiddeninput = document.createElement("input");
        hiddeninput.setAttribute("type","hidden");
        hiddeninput.setAttribute("value", elem.price);
        hiddeninput.className = "price";

        let quantity = document.createElement("section");
        quantity.className = "items-list__item--quantity";

        let form = document.createElement("form");
        let minusbtn = document.createElement("button");
        let minusbtnIcon = document.createElement("i");
        minusbtn.className = "minus-quantity";
        minusbtnIcon.className = "fa fa-minus";
        minusbtn.appendChild(minusbtnIcon);
        
        let quantityinput = document.createElement("input");
        quantityinput.setAttribute("type", "number");
        quantityinput.setAttribute("min", 0);
        quantityinput.setAttribute("max", 1);
        quantityinput.value = elem.quantity;
        quantityinput.className = "quantity";
        let plusbtn = document.createElement("button");
        let plusbtnIcon = document.createElement("i");
        plusbtn.className = "add-quantity";
        plusbtnIcon.className = "fa fa-plus";
        plusbtn.appendChild(plusbtnIcon);
        
        form.appendChild(minusbtn);
        form.appendChild(quantityinput);
        form.appendChild(plusbtn);
        quantity.appendChild(form);

        let inputhiddenvalue = document.createElement("input");
        inputhiddenvalue.className = "unit-price-hidden";
        inputhiddenvalue.setAttribute("type","hidden");
        inputhiddenvalue.value = elem.price * elem.quantity;

        let h1unitprice = document.createElement("h1");
        h1unitprice.className = "unit-price";
        h1unitprice.innerText = `$${elem.price * elem.quantity}`;

        name.appendChild(deletesection);
        name.appendChild(imagecontainer);
        name.append(h1name);
        section.appendChild(name);
        section.appendChild(h1price);
        section.appendChild(hiddeninput);
        section.appendChild(quantity);
        section.appendChild(inputhiddenvalue);
        section.appendChild(h1unitprice);
        

        let hr = document.createElement("hr");
        document.querySelector(".items-list").appendChild(hr);
        document.querySelector(".items-list").appendChild(section);
    });
}




//js

let quantityInput = document.querySelectorAll('.quantity');
let upQuantity = document.querySelectorAll('.add-quantity');
let downQuantity = document.querySelectorAll('.minus-quantity');

let price = document.querySelectorAll('.price');
let unitPrice = document.querySelectorAll('.unit-price');
let unitPriceHidden = document.querySelectorAll('.unit-price-hidden');

let counter = (sessionStorage.getItem("items") != 0)? sessionStorage.getItem("items"): 0;
let basket = document.querySelectorAll(".header__account--item span")[1];
let totalPriceText = document.querySelector(".header__account--item small");
basket.innerText = (sessionStorage.getItem("items")=== null)? `0 Items` : `${sessionStorage.getItem("items")} Items`;
totalPriceText.innerText = (sessionStorage.getItem("total")=== null)? `$0.00` : `$${sessionStorage.getItem("total")}.00`;

let itemsListItem = document.querySelectorAll(".items-list__item");
let itemsArray = [];

itemsListItem.forEach((elem,index)=>{
    itemsArray.push((quantityInput[index].value == 0)? 0 : parseInt(quantityInput[index].value));
});

sessionStorage.setItem("item-list",(sessionStorage.getItem("item-list") === null)? JSON.stringify(itemsArray): sessionStorage.getItem("item-list"));

let itemList = (sessionStorage.getItem("item-list") != null)? sessionStorage.getItem("item-list"): 0;
itemList = JSON.parse(itemList);

itemList.forEach((elem,index) => {
    quantityInput[index].value = elem;
    unitPriceHidden[index].value = quantityInput[index].value * price[index].value;
    unitPrice[index].innerText = `$${quantityInput[index].value * price[index].value}`;
    calculateTotal();
});



function calculateTotal(){
    let subtotal = document.querySelector('.sub-total');
    let totalPrice = document.querySelector('.total-price');
    let subtotalVal = 0;
    unitPriceHidden.forEach((elem,index)=>{
        subtotalVal += parseInt(elem.value);
    });
    subtotal.innerText = `$${subtotalVal}`;
    totalPrice.innerText = `$${subtotalVal + 20}`;
    sessionStorage.setItem("total",subtotalVal + 20);
    totalPriceText.innerText = (sessionStorage.getItem("total")=== null)? `$0.00` : `$${sessionStorage.getItem("total")}.00`;
}


upQuantity.forEach((elem, index) => {
    elem.addEventListener("click", (e)=>{
        e.preventDefault();
        quantityInput[index].value++;
        unitPrice[index].innerText = `$${(quantityInput[index].value * price[index].value)}`; 
        unitPriceHidden[index].value = (quantityInput[index].value * price[index].value);
        calculateTotal();
        counter++;
        sessionStorage.setItem("items",counter);
        basket.innerText = `${sessionStorage.getItem("items")} Items`;
        itemList[index]+=1;
        sessionStorage.setItem("item-list",JSON.stringify(itemList));
    });
});

downQuantity.forEach((elem, index) => {
    elem.addEventListener("click", (e)=>{
        e.preventDefault();
        if(quantityInput[index].value > 0){
            quantityInput[index].value--;
            unitPrice[index].innerText = `$${(quantityInput[index].value * price[index].value)}`;
            unitPriceHidden[index].value = (quantityInput[index].value * price[index].value); 
            calculateTotal();
            counter--;
            sessionStorage.setItem("items",counter);
            basket.innerText = `${sessionStorage.getItem("items")} Items`;
            itemList[index]-=1;
            sessionStorage.setItem("item-list",JSON.stringify(itemList));
            
        }
            
    });
});

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


let itemDelete = document.querySelectorAll('.items-list__item--name__delete');

let items = document.querySelectorAll('.items-list__item');
let hr = document.querySelectorAll('hr');

itemDelete.forEach((elem,index)=>{
    elem.addEventListener("click", ()=>{
        items[index].style.display = "none";
        hr[index].style.display = "none";
        price[index].value = 0;
        unitPriceHidden[index].value = 0;
        calculateTotal();
    });
});

////// checkout button

document.querySelector(".checkout-button").addEventListener("click", (e)=>{
    e.preventDefault();
    let items = document.querySelectorAll(".item-name");

    let array = [];
    

    if(localStorage.getItem("orders")==null){
        items.forEach((elem,index) => {
            let object = {
                itemname: elem.innerText,
                price: price[index].value,
                totalPrice: unitPriceHidden[index].value,
                quantity: quantityInput[index].value
            }
            array.push(object);
        });
        localStorage.setItem("orders", JSON.stringify(array));
    }else{
        let x = JSON.parse(localStorage.getItem("orders"));
        items.forEach((elem,index) => {
            let object = {
                itemname: elem.innerText,
                price: price[index].value,
                totalPrice: unitPriceHidden[index].value,
                quantity: quantityInput[index].value
            }
            x.push(object);
        });
        localStorage.setItem("orders", JSON.stringify(x));
    }
});