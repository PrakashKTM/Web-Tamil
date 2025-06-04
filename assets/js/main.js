const icon1 =document.querySelector(".iconflex");

icon1.addEventListener("click", ()=>{
    let navbar =document.querySelector("ul.header1-menu");
  let navicon =document.querySelectorAll(".navicon");
 //show navbar
  navbar.classList.toggle("show");
  //chnage navicon
  navicon.forEach(icon =>{
    icon.classList.toggle("hidden")
  })
})