let tabItems = document.querySelectorAll(".tab-item");
let tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  // grab content item from dom
  console.log(this.id);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add show class to the content
  tabContentItem.classList.add("show");
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
