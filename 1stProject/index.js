var istatus=document.querySelector("h5")
var addf=document.querySelector("#add")
var isFriend=false

addf.addEventListener("click",function (){
    if(!isFriend){
        istatus.innerHTML="Friends"
        istatus.style.color="green";
        addf.innerHTML="Remove";
        isFriend=true;
    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color="red";
        addf.innerHTML="Add Friend";
        isFriend=false;
    }
  
})
