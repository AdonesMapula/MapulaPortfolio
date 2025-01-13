const projectDetails = {
    1: "Website Design: A responsive and modern website built using HTML, CSS, and JavaScript to showcase Panyapakz shoes and sneakers.",
    2: "E-commerce Platform: A full-featured e-commerce platform with user authentication, product catalog, and payment integration.",
    3: "Mobile App Development: A cross-platform mobile app designed to manage clinic tasks efficiently, using Java in Android Studio and MySQL."
};

document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project'); // Get project ID from button
        const descriptionElement = document.getElementById('project-description');
        descriptionElement.textContent = projectDetails[projectId]; // Set the project description
    });
});

function viewProjectDetails(projectId) {
    const projectData = {
        1: {
            image: "project2.png",
            description: "This is a website design project focused on creating modern and responsive layouts."
        },
        2: {
            image: "project3.png",
            description: "An e-commerce and a showcase website built with a focus on user experience and functionality."
        },
        3: {
            image: "project1.png",
            description: "A mobile app development project aimed at providing Amity Medical Clinic team patient procecssing efficient."
        }
    };

    // Get the project details div and populate it with data
    const projectDetails = document.getElementById("project-details");
    const projectImage = document.getElementById("project-image");
    const projectDescription = document.getElementById("project-description");

    const selectedProject = projectData[projectId];
    projectImage.src = selectedProject.image;
    projectDescription.textContent = selectedProject.description;

    // Show the project details section
    projectDetails.style.display = "block";
}


document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message: "${message}" has been received.`);
});
