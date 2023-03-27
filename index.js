const container=document.querySelector(".container");
const btn=document.querySelector(".btn");
const popupcon=document.querySelector(".popupcontainer");
const close=document.querySelector("i");
btn.addEventListener("click",function(){
    container.classList.add("active");
    popupcon.classList.remove("active");

});
close.addEventListener("click",function(){
    popupcon.classList.add("active");
    container.classList.remove("active");
});