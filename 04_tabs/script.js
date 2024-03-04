const tabBtn = document.querySelectorAll(".tab-btn");

//selecting on clicking
tabBtn.forEach(function (tabBtnItem) {
  tabBtnItem.addEventListener("click", function () {
    for (let tabBtnItem of tabBtn) {
      tabBtnItem.classList.remove("tab-btn--selected");
    }
    tabBtnItem.classList.add("tab-btn--selected");
    tabOpening()
  });
});

//tabopening function
function tabOpening() {
  //storing selected tab btn on variable
  const tabBtnSelected = document.querySelector(".tab-btn--selected");

  //storing all tabContent elements on variabls
  const tabContent = document.querySelectorAll(".tabcontent");

  //selecting tab content by checking if clicked button is equal to tabContent
  tabContent.forEach(function (tabContentItem) {
    if (tabContentItem.classList[0] == tabBtnSelected.innerText) {
        for(let tabContentItem of tabContent){
            tabContentItem.classList.remove("tabcontent--selected")
        }
        tabContentItem.classList.add("tabcontent--selected")
    }
  });
}

