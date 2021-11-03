let mainElements = document.querySelectorAll(".page");

/**Change Pages */
let changePages = document.addEventListener("click", e => {
  let obj = e.target;
  if (obj.id == "#1" || obj.parentElement.id == "#1") {
    mainElements.forEach(i => {
      i.classList.add("hide");
    });
    let page = document.querySelector(".page-1");
    page.classList.remove("hide");
    window.scrollTo(0, 0);
  } else if (obj.id == "#2"|| obj.parentElement.id == "#2") {
    mainElements.forEach(i => {
      i.classList.add("hide");
    });
    let page = document.querySelector(".page-2");
    page.classList.remove("hide");
    window.scrollTo(0, 0);
  } else if (obj.id == "#3" || obj.parentElement.id == "#3") {
    mainElements.forEach(i => {
      i.classList.add("hide");
    });
    let page = document.querySelector(".page-3");
    page.classList.remove("hide");
    window.scrollTo(0, 0);
  } else if (obj.id == "#4" || obj.parentElement.id == "#4") {
    mainElements.forEach(i => {
      i.classList.add("hide");
    });
    let page = document.querySelector(".page-4");
    page.classList.remove("hide");
    window.scrollTo(0, 0);
  }
});

/**Change Page Selected Style */
let changeSelectedStyle = document.addEventListener("click", e => {
  let obj = e.target;
  if (
    obj.id == "#1" ||
    obj.id == "#2" ||
    obj.id == "#3" ||
    obj.id == "#4" ||
    obj.parentElement.id == "#1" ||
    obj.parentElement.id == "#2" ||
    obj.parentElement.id == "#3" ||
    obj.parentElement.id == "#4"
  ) {

    let allSelected = document.querySelectorAll(".selected");
    allSelected.forEach(i => {
      i.classList.remove("selected");
    });
    
    if(obj.nodeName == "A"){
        obj.classList.add("selected");
    } else{
        obj.parentElement.classList.add("selected");
    }
  }
});


