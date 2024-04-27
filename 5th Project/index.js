var arr=[{dp:"https://images.pexels.com/photos/9120344/pexels-photo-9120344.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load/",story:"https://images.pexels.com/photos/13359667/pexels-photo-13359667.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},

{dp:"https://images.pexels.com/photos/8434281/pexels-photo-8434281.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",story:"https://images.pexels.com/photos/20684666/pexels-photo-20684666/free-photo-of-a-close-up-of-a-pink-flower-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},

{dp:"https://images.pexels.com/photos/20215015/pexels-photo-20215015/free-photo-of-a-person-holding-a-book-on-a-bed-with-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",story:"https://images.pexels.com/photos/10112345/pexels-photo-10112345.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},

{dp:"https://images.pexels.com/photos/17943923/pexels-photo-17943923/free-photo-of-a-small-cave-in-the-side-of-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",story:"https://images.pexels.com/photos/20532916/pexels-photo-20532916/free-photo-of-red-haired-woman-in-jacket-on-beach.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}



]
//inside the backtick we wrote html
var clutter="";

arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
 </div>
 `
}); 


var storiyan=document.querySelector("#storiyan")
storiyan.innerHTML=clutter;

//det.target.id gives us the id , when we click on a particular object
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
})

