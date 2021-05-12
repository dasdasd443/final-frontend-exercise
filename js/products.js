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
        }
        image.setAttribute("src",link);
    }); 
});

let heart = document.querySelector(".buttonCartheart-heart");

heart.addEventListener("click",()=>{
    if(heart.style.color == "red"){
        heart.style.color = "#33A0FF";
    }else{
        heart.style.color = "red";
    }
    
});