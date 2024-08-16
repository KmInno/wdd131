document.addEventListener('DOMContentLoaded', function() {
    const portfolioImages = document.getElementById('portfolioImages');

    const projects = [
        {
            title: 'Project 1',
            image: 'images/project1.jpg',
            link: 'https://yourlink.com/project1'
        },
        {
            title: 'Project 2',
            image: 'images/project2.jpg',
            link: 'https://yourlink.com/project2'
        }
        // Add more projects as needed
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item';

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.target = '_blank';

        const projectImg = document.createElement('img');
        projectImg.src = project.image;
        projectImg.alt = project.title;

        projectLink.appendChild(projectImg);
        projectDiv.appendChild(projectLink);
        portfolioImages.appendChild(projectDiv);
    });
});
