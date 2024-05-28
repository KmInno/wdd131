function displayDateModified() {
  const lastModified = new Date(document.lastModified);
  const lastModifiedSpan = document.getElementById('displayDateModified');
  lastModifiedSpan.textContent = lastModified.toLocaleString();
}

window.onload = function() {
  displayDateModified();
};

const postsElement = document.querySelector("#posts");
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;
if (numVisits !== 0) {
    postsElement.textContent = numVisits;
} else {
    postsElement.textContent = `Thank you for making your first Review on our website`;
    numVisits++;
}

numVisits++;
localStorage.setItem("numVisits", numVisits);