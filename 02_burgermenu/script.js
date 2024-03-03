const burgerMenu = document.querySelector(".burgerMenu");
const topLine = document.querySelector(".topLine");
const bottomLine = document.querySelector(".bottomLine");
const middleLine = document.querySelector(".middleLine");

let menuStatus = "close";
burgerMenu.addEventListener("click", function () {
  if (menuStatus == "close") {
    menuStatus = "open";
    topLine.style.transform = "rotate(-36deg)";
    bottomLine.style.transform = "rotate(36deg)";
    middleLine.style.opacity = "0";
  } else if (menuStatus == "open") {
    menuStatus = "close";
    topLine.style.transform = "rotate(0deg)";
    bottomLine.style.transform = "rotate(0deg)";
    middleLine.style.opacity = "1";
  }
});
