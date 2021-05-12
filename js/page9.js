let basket = document.querySelectorAll(".header__account--item span")[1];
basket.innerText = (sessionStorage.getItem("items")=== null)? `0 Items` : `${sessionStorage.getItem("items")} Items`;