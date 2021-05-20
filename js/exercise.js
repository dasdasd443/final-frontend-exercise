let displayMyName = (firstname, lastname)=>{
    return `${firstname} ${lastname}`;
}

let calculateAgeFromBirthday =  (monthx,dayx,yearx) =>{
    let curdate = new Date();
    let month = curdate.getMonth() - monthx;
    let day = (curdate.getDay() + 2) - dayx;
    return (month < 0 && day < 0)? (curdate.getFullYear() - yearx) - 1: (curdate.getFullYear() - yearx);
}

let introduction = ()=>{
    return `Hello, my name is ${displayMyName("Victor","Chiong")} and I am ${calculateAgeFromBirthday(5,25,1998)} years old`;
}

let called = true;

if(called){
    console.log(introduction());
}else{
    console.log("I was not called");
}