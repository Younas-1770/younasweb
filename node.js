let menu =document.querySelector("#menu-icon")
let navbr =document.querySelector(".navbar")

menu.onclick =() =>{
    menu.classList.toggle('bx-x')
    navbr.classList.toggle('active')
}