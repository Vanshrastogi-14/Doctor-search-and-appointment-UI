let edit=document.querySelector(".edit");
    edit.addEventListener("click",()=>{
        let what=prompt("What do you want to Edit?");
        let detail= prompt("Edit detail: ");
        let pname=document.querySelector(".pname");
        let dname=document.querySelector(".dname");
        let date=document.querySelector(".date");
        let time=document.querySelector(".time");
        if(what=="patient name"){
            pname.innerText=detail;
        }
        if(what=="doctor name"){
            dname.innerText=detail;
        }
        if(what=="date"){
            date.innerText=detail;
        }
        if(what=="time"){
            time.innerText=detail;
        }
    });

let edit2=document.querySelector(".edit2");
edit2.addEventListener("click",()=>{
    let what=prompt("What do you want to Edit?");
    let detail= prompt("Edit detail: ");
    let pname=document.querySelector(".pname2");
    let dname=document.querySelector(".dname2");
    let date=document.querySelector(".date2");
    let time=document.querySelector(".time2");
    if(what=="patient name"){
        pname.innerText=detail;
    }
    if(what=="doctor name"){
        dname.innerText=detail;
    }
    if(what=="date"){
        date.innerText=detail;
    }
    if(what=="time"){
         time.innerText=detail;
    }
});  

let edit3=document.querySelector(".edit2");
edit2.addEventListener("click",()=>{
    let what=prompt("What do you want to Edit?");
    let detail= prompt("Edit detail: ");
    let pname=document.querySelector(".pname3");
    let dname=document.querySelector(".dname3");
    let date=document.querySelector(".date3");
    let time=document.querySelector(".time3");
    if(what=="patient name"){
        pname.innerText=detail;
    }
    if(what=="doctor name"){
        dname.innerText=detail;
    }
    if(what=="date"){
        date.innerText=detail;
    }
    if(what=="time"){
         time.innerText=detail;
    }
});    

let cancel1=document.querySelector(".cancel1");
let tr1=document.querySelector(".tr1");
cancel1.addEventListener("click",()=>{
    tr1.remove();
})

let cancel2=document.querySelector(".cancel2");
let tr2=document.querySelector(".tr2");
cancel2.addEventListener("click",()=>{
    tr2.remove();
})

let cancel3=document.querySelector(".cancel3");
let tr3=document.querySelector(".tr3");
cancel3.addEventListener("click",()=>{
    tr3.remove();
})