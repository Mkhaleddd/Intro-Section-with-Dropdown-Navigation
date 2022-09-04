const openIcon = document.querySelector(".menu-icon");
const closeIcon=document.querySelector(".close-icon");
const menu = document.querySelector(".mobile-navbar");
openIcon.addEventListener("click",function (){
 menu.classList.add("show");
 document.querySelector(".overlay").classList.add("show");

})
closeIcon.addEventListener("click",function (){
	menu.classList.remove("show");
	document.querySelector(".overlay").classList.remove("show");
   
   })

  