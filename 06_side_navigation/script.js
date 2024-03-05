const iconMenu = document.querySelector(".icon--menu");
const sideNavbar = document.querySelector(".sideNavbar")

//when click on icon menu
iconMenu.addEventListener("click", function () {
    sideNavbar.style.width = "250px"
});

const iconClose = document.querySelector(".icon--close");
//when click on close icon
iconClose.addEventListener("click", function () {
    sideNavbar.style.width = "0px"
});