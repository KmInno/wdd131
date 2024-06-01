document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for animations
    const sections = document.querySelectorAll('section');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Last modified date
    displayDateModified();

    // Portfolio projects
    let projects = [
        {
            imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x1280/b18d4e9f974c11ed97b1eeeeac1efd6c744c9093.jpeg",
            linkUrl: "https://kminno.github.io/wdd131/temples.html",
            description: "Temple Project"
        },
        {
            imageUrl: "https://newsroom.churchofjesuschrist.org/media/blog/Panama-City-Temple.jpg",
            linkUrl: "https://kminno.github.io/wdd131/filtered-temples.html",
            description: "Filtered Temple Project"
        },
        {
            imageUrl: "https://www.zoho.com/sites/zweb/images/forms/template/client-details.png",
            linkUrl: "https://kminno.github.io/wdd131/form.html",
            description: "Form Project"
        },
        {
            imageUrl: "https://i.pinimg.com/736x/ea/10/e1/ea10e1a86136900efb3a97007ae93976.jpg",
            linkUrl: "https://kminno.github.io/wdd131/place.html",
            description: "Hero Page Project"
        }
    ];

    // Save projects to local storage if not already present
    if (!localStorage.getItem('projects')) {
        localStorage.setItem('projects', JSON.stringify(projects));
    } else {
        projects = JSON.parse(localStorage.getItem('projects'));
    }

    // Display portfolio projects
    const portfolioImagesContainer = document.getElementById("portfolioImages");
    portfolioImagesContainer.innerHTML = ''; // Clear any existing content

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

    // Example function to add a new project dynamically
    function addProject(imageUrl, linkUrl, description) {
        const newProject = {
            imageUrl,
            linkUrl,
            description
        };
        projects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(projects));
        displayProjects(); // Call the function to update the display
    }

    // Function to display portfolio projects
    function displayProjects() {
        portfolioImagesContainer.innerHTML = ''; // Clear the container
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
    }

    // Initial display of projects
    displayProjects();
});

// Function to display last modified date
function displayDateModified() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedSpan = document.getElementById('displayDateModified');
    lastModifiedSpan.textContent = lastModified.toLocaleString();
}
