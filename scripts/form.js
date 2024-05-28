function displayDateModified() {
  const lastModified = new Date(document.lastModified);
  const lastModifiedSpan = document.getElementById('displayDateModified');
  lastModifiedSpan.textContent = lastModified.toLocaleString();
}

window.onload = function () {
  displayDateModified();
  const selectElement = document.getElementById('productSelect');

  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
  });
  trackVisits();
}

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    avgRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    avgRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    avgRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    avgRating: 5.0
  }
];



function trackVisits() {
  let visitCount = localStorage.getItem('visitCount');
  if (visitCount === null) {
      visitCount = 0;
  } else {
      visitCount = parseInt(visitCount);
  }

  visitCount++;

  localStorage.setItem('visitCount', visitCount);

  document.getElementById('visitCount').textContent = visitCount;
}