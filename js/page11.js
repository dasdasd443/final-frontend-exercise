
let quantityInput = document.querySelectorAll('.quantity');
let upQuantity = document.querySelectorAll('.add-quantity');
let downQuantity = document.querySelectorAll('.minus-quantity');

let price = document.querySelectorAll('.price');
let unitPrice = document.querySelectorAll('.unit-price');
let unitPriceHidden = document.querySelectorAll('.unit-price-hidden');

let counter = (sessionStorage.getItem("items") != 0)? sessionStorage.getItem("items"): 0;
let basket = document.querySelectorAll(".header__account--item span")[1];
basket.innerText = `${sessionStorage.getItem("items")} Items`;

function calculateTotal(){
    let subtotal = document.querySelector('.sub-total');
    let totalPrice = document.querySelector('.total-price');
    let subtotalVal = 0;
    unitPriceHidden.forEach((elem,index)=>{
        subtotalVal += parseInt(elem.value);
    });
    subtotal.innerText = `$${subtotalVal}`;
    totalPrice.innerText = `$${subtotalVal + 20}`;
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
    });
});

downQuantity.forEach((elem, index) => {
    elem.addEventListener("click", (e)=>{
        e.preventDefault();
        if(quantityInput[index].value > 0)
            quantityInput[index].value--;
            unitPrice[index].innerText = `$${(quantityInput[index].value * price[index].value)}`; 
            calculateTotal();
            counter--;
            sessionStorage.setItem("items",counter);
            basket.innerText = `${sessionStorage.getItem("items")} Items`;
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