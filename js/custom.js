
const menuIcon = document.querySelector(".menu-icon")
const menuBox = document.querySelector(".menu ul")
const menuClose = document.querySelector(".menu-close")

menuIcon.addEventListener("click", ()=> {
    menuBox.classList.add("visible-menuBox")
})
menuClose.addEventListener("click", ()=> {
    menuBox.classList.remove("visible-menuBox")
})
window.addEventListener("scroll", ()=> {
    menuBox.classList.remove("visible-menuBox")
})
