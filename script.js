const menuIcon =document.querySelector(".meni-icon");
const navbar= document.querySelector(".navbar");

menuIcon.addEventListener("click",() => {
   navbar.classList.add("active");
   searchForm.classList.remove("active");
   
}