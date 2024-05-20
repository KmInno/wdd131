function displayDateModified() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedSpan = document.getElementById('displayDateModified');
    lastModifiedSpan.textContent = lastModified.toLocaleString();
}

window.onload = function () {
    displayDateModified();
}

const mainnav = document.querySelector("nav ul");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", function () {
    mainnav.classList.add('show-menu');
    hambutton.classList.toggle("show");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Mount Timpanogos Utah Temple",
        location: " American Fork, Utah",
        dedicated: " 1996, October, 13",
        area: 107240,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mount-timpanogos-utah/400x250/mount-timpanogos-temple-lds-885508-wallpaper.jpg"
    },
    {
        templeName: "Monticello Utah Temple",
        location: " Monticello, Utah",
        dedicated: " 1998, July, 26",
        area: 11225,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monticello-utah/400x250/monticello-temple-lds-1157281-wallpaper.jpg"
    },
    {
        templeName: "Mesa Arizona Temple",
        location: "Mesa, Arizona",
        dedicated: "1927, October, 23",
        area: 113916,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_news_conference.jpeg"
    },

];

// Function to load images and details dynamically
// const temples = [
//     { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
//     { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
//     { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
//     { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
//     { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
//     { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
//     { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
//     { templeName: "Mount Timpanogos Utah Temple", location: "American Fork, Utah", dedicated: "1996, October, 13", area: 107240, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mount-timpanogos-utah/400x250/mount-timpanogos-temple-lds-885508-wallpaper.jpg" },
//     { templeName: "Monticello Utah Temple", location: "Monticello, Utah", dedicated: "1998, July, 26", area: 11225, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monticello-utah/400x250/monticello-temple-lds-1157281-wallpaper.jpg" },
//     { templeName: "Mesa Arizona Temple", location: "Mesa, Arizona", dedicated: "1927, October, 23", area: 113916, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_news_conference.jpeg" },
// ];

// Function to load images and details dynamically
function loadImagesAndDetails(filteredTemples) {
    const container = document.getElementById("image-container");
    container.innerHTML = ""; // Clear existing content

    filteredTemples.forEach((temple) => {
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy"; // Add lazy loading attribute

        const figure = document.createElement("figure");

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = temple.templeName;

        const detailsList = document.createElement("ul");
        detailsList.innerHTML = `
            <li><strong>Location:</strong> ${temple.location}</li>
            <li><strong>Dedicated:</strong> ${temple.dedicated}</li>
            <li><strong>Area:</strong> ${temple.area} square meters</li>
        `;

        figure.appendChild(figcaption);
        figure.appendChild(detailsList);

        const card = document.createElement("div");
        card.className = "card";
        card.appendChild(figure);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// Function to filter temples based on category
function filterTemples(category) {
    let filteredTemples = temples;

    if (category === "old") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('2000-01-01'));
    } else if (category === "new") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) >= new Date('2000-01-01'));
    } else if (category === "large") {
        filteredTemples = temples.filter(temple => temple.area > 50000);
    } else if (category === "small") {
        filteredTemples = temples.filter(temple => temple.area <= 50000);
    }

    loadImagesAndDetails(filteredTemples);
}

// Event listeners for navigation links
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = event.target.getAttribute('data-category');
        filterTemples(category);
    });
});

// Load all temples by default on page load
window.onload = () => filterTemples('all');





