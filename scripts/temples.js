

window.onload = function () {
  displayDateModified();
};

const mainnav = document.querySelector("nav ul");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", function() {
  mainnav.classList.add('show-menu');
  hambutton.classList.toggle("show");
});


