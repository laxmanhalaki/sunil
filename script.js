
let search=document.querySelector("#search");
let navbar=document.querySelector("#navbar");
 document.querySelector("#src").onclick=()=>{
    search.classList.toggle("active");
    cartcont.classList.remove("active");
    navbar.classList.remove("active");
}
document.querySelector("#close").onclick=()=>{
    search.classList.toggle("active");
}
document.querySelector("#nav-close").onclick=()=>{
    navbar.classList.toggle("active");
}
document.querySelector("#menu").onclick=()=>{
    navbar.classList.toggle("active");
    search.classList.remove("active");
}




