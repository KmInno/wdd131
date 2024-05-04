function displayDateModified() {
  const lastModified = new Date(document.lastModified);
  const lastModifiedSpan = document.getElementById("displayDateModified");
  lastModifiedSpan.textContent = lastModified.toLocaleString();
}

window.onload = function () {
  displayDateModified();
};

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


