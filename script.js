setTimeout(()=>{

document.getElementById("loader").style.display="none";
document.getElementById("loginPage").style.display="flex";

},4000);


function login(){

let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

if(email==="jeanjacqueB@gmail.com" && pass==="bonjour2026@"){

document.getElementById("loginPage").style.display="none";
document.getElementById("dashboard").style.display="flex";

}else{

alert("Identifiants incorrects");

}

}


const menuItems=document.querySelectorAll(".sidebar li");
const pages=document.querySelectorAll(".page");

menuItems.forEach((item,index)=>{

item.addEventListener("click",()=>{

menuItems.forEach(i=>i.classList.remove("active"));
item.classList.add("active");

pages.forEach(p=>p.classList.remove("active"));
pages[index].classList.add("active");

});

});
