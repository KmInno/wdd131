function displayDateModified() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedSpan = document.getElementById('displayDateModified');
    lastModifiedSpan.textContent = lastModified.toLocaleString();
  }
  
  window.onload = function() {
    displayDateModified();
  }


  document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x1280/b18d4e9f974c11ed97b1eeeeac1efd6c744c9093.jpeg",
            linkUrl: "https://example.com/project1",
            description: "Temple Project 1"
        },
        {
            imageUrl: "https://seetruetechnology.com/wp-content/uploads/2022/02/BG-7.jpg",
            linkUrl: "https://example.com/project2",
            description: "Temple Project 2"
        },
        {
            imageUrl: "https://seetruetechnology.com/wp-content/uploads/2022/02/BG-7.jpg",
            linkUrl: "https://example.com/project3",
            description: "Temple Project 3"
        },
        {
            imageUrl: "https://seetruetechnology.com/wp-content/uploads/2022/02/BG-7.jpg",
            linkUrl: "https://example.com/project4",
            description: "Temple Project 4"
        }
    ];

    const portfolioImagesContainer = document.getElementById("portfolioImages");

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.className = "project";

        const linkElement = document.createElement("a");
        linkElement.href = project.linkUrl;
        linkElement.target = "_blank";

        const imgElement = document.createElement("img");
        imgElement.src = project.imageUrl;
        imgElement.alt = project.description;
        imgElement.loading = "lazy"; // Lazy loading

        const textElement = document.createElement("p");
        textElement.textContent = project.description;

        linkElement.appendChild(imgElement);
        projectElement.appendChild(linkElement);
        projectElement.appendChild(textElement);
        portfolioImagesContainer.appendChild(projectElement);
    });
});


