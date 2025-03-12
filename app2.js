let form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let name=document.querySelector("#name");
    let age=document.querySelector("#age");
    let gender=document.querySelector("#gender");
    let mb=document.querySelector("#mobile");
    let date=document.querySelector("#start");
    let time=document.querySelector("#appointment");
    let inputs=document.querySelectorAll("input");
    let select=document.querySelector("select");
    let part1=document.querySelector(".part1");
    let data=[];
    data.push(name.value);
    data.push(age.value);
    data.push(gender.value);
    data.push(mb.value);
    data.push(date.value);
    data.push(time.value);
    
    console.log(data);
    alert("Form submitted.");
    for(input of inputs){
        input.value="";
    };
    select.value="";

});





