let menuIcon = document.querySelectorAll(".iconBarBox span");

menuIcon.forEach(function (icon) {

  icon.addEventListener("click", function () {
    for (let icon of menuIcon) {
      icon.classList.remove("active");
    }
    this.classList.add("active");
  });


});
