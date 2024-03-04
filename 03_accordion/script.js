const accordionVisible = document.querySelectorAll(".accordion-item--visible");
let accordionStatus = "close";

accordionVisible.forEach(function (visibleItem) {
  visibleItem.addEventListener("click", function () {
    if (accordionStatus == "close") {
      accordionStatus = "open";
      this.nextElementSibling.style.display = "inline-block";
      this.nextElementSibling.style.opacity = "1";
      this.children[0].style.transform = "translateY(-50%) rotate(90deg)";
    } else if (accordionStatus == "open") {
      accordionStatus = "close";
      this.nextElementSibling.style.display = "none";
      this.nextElementSibling.style.opacity = "0";
      this.children[0].style.transform = "translateY(-50%) rotate(0deg)";
    }
  });
});
