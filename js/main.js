window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

var nav = document.querySelector(".navigation");
var btnMenu = document.querySelector(".menu-btn");
var btnClose = document.querySelector(".close-btn");

btnMenu.addEventListener("click",function(){
    nav.style.display = "flex";
});

btnClose.addEventListener("click",function(){
    nav.style.display = "none";
});