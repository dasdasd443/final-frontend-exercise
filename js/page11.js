
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

sessionStorage.setItem("item-list",(sessionStorage.getItem("item-list") === null)? JSON.stringify([0,0]): sessionStorage.getItem("item-list"));

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