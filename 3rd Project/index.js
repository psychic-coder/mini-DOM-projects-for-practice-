var crsr=document.querySelector(".cursor");
var main=document.querySelector("#main");

main.addEventListener("mousemove",function(e){
    crsr.style.left=e.x+"px";
    crsr.style.top=e.y+"px";
})