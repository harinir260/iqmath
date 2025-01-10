document.addEventListener('DOMContentLoaded', function () {
    const internships = [
        {
            title: "Web Development Intern",
            description: "Work on front-end and back-end web development projects.",
            image: "web.jpg",
            link: "https://forms.gle/BXdWZ25pCvbNF4Xz6"
        },
        {
            title: "Data Science Intern",
            description: "Analyze datasets and develop predictive models.",
            image: "data-science.jpg",
            link: "https://forms.gle/BXdWZ25pCvbNF4Xz6"
        },
        {
            title: "Cybersecurity Intern",
            description: "Learn about security protocols and protect systems from cyber threats.",
            image: "cybersecurity.jpeg",
            link: "https://forms.gle/BXdWZ25pCvbNF4Xz6"
        },
        {
            title: "Cloud Computing Intern",
            description: "Build and manage cloud-based applications and infrastructure.",
            image: "cloud.jpeg",
            link: "https://forms.gle/BXdWZ25pCvbNF4Xz6"
        }
    ];

    const internshipList = document.getElementById('internship-list');

    internships.forEach(internship => {
        const internshipCard = document.createElement('div');
        internshipCard.classList.add('internship-card');

        internshipCard.innerHTML = `
            <img src="${internship.image}" alt="${internship.title}" class="internship-image">
            <div class="internship-info">
                <h3 class="internship-title">${internship.title}</h3>
                <p class="internship-description">${internship.description}</p>
                <a href="${internship.link}" class="internship-button" target="_blank">Apply Now</a>
            </div>
        `;

        internshipList.appendChild(internshipCard);
    });
});
