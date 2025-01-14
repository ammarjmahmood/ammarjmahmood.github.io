document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.horizontal-scroll');
  
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
  
    sections.forEach(section => {
        observer.observe(section);
    });
  
    // Add event listeners for hovering over the sidebar
    sidebar.addEventListener('mouseover', () => {
        content.classList.add('shifted');
    });
  
    sidebar.addEventListener('mouseout', () => {
        content.classList.remove('shifted');
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Project modal functionality
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const projectDetails = document.getElementById('projectDetails');
    
    // Project details
    const projects = {
        ecosnap: {
            title: "EcoSnap",
            description: "EcoSnap is an AI-powered sustainable lifestyle solution that won 1st Place Overall in a Hackathon.",
            features: [
                "AI-powered image recognition for sustainable product recommendations",
                "Integration with Ray-Ban Meta smart glasses",
                "Eco-friendly shopping companion",
                "Sustainability ratings and eco-challenges"
            ],
            technologies: "OpenAI API, Node.js, JavaScript, HTML, CSS, Python"
        },
        discerning: {
            title: "Discerning",
            description: "Discerning is a Discord API project that won the UI/UX category in a Hackathon.",
            features: [
                "Custom Discord bot functionality",
                "Intuitive user interface for bot management",
                "Advanced UI/UX design principles applied"
            ],
            technologies: "Discord API, JavaScript, HTML, CSS, Node.js"
        },
        flashpdf: {
            title: "Flash PDF",
            description: "A tool to convert PDF documents into flashcards for efficient studying.",
            features: [
                "PDF parsing and content extraction",
                "Automatic flashcard generation",
                "User-friendly interface for reviewing flashcards"
            ],
            technologies: "Python, PyPDF2, Natural Language Processing"
        },
        uss: {
            title: "University Soaring Society Website",
            description: "A website designed for the University Soaring Society to showcase their activities and attract new members.",
            features: [
                "Responsive design for various devices",
                "Information about soaring and club activities",
                "Member registration and event calendar"
            ],
            technologies: "HTML, CSS, JavaScript, Bootstrap"
        },
        proximitysensor: {
            title: "Proximity Sensor + Casing (CAD)",
            description: "A custom-designed proximity sensor with a CAD-designed casing for optimal performance and protection.",
            features: [
                "High-precision proximity sensing",
                "Custom CAD-designed protective casing",
                "Integration with various systems"
            ],
            technologies: "CAD software, 3D printing, Electronics design"
        },
        catfeeder: {
            title: "Automatic Cat Feeder IOT",
            description: "An Internet of Things (IoT) based automatic cat feeding system for pet owners.",
            features: [
                "Scheduled feeding times",
                "Remote feeding activation via smartphone",
                "Food level monitoring"
            ],
            technologies: "Arduino, IoT protocols, Mobile app development"
        },
        matrixclock: {
            title: "Arduino Matrix Clock",
            description: "A custom-built digital clock using Arduino and LED matrix display.",
            features: [
                "Accurate timekeeping",
                "Customizable display patterns",
                "Energy-efficient design"
            ],
            technologies: "Arduino, LED matrix, C++ programming"
        },
        cardboardsafe: {
            title: "Cardboard Safe",
            description: "A DIY safe made from cardboard with basic security features.",
            features: [
                "Combination lock mechanism",
                "Reinforced cardboard structure",
                "Low-cost security solution"
            ],
            technologies: "Mechanical design, Basic electronics"
        }
    };

    // Generate content for the modal
    if (projects[projectId]) {
        const project = projects[projectId];
        let content = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <h3>Key Features:</h3>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <h3>Technologies Used:</h3>
            <p>${project.technologies}</p>
        `;
        projectDetails.innerHTML = content;
        modal.style.display = 'block';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}