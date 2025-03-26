// Neural Network Animation
        const canvas = document.getElementById('canvas-background');
        const ctx = canvas.getContext('2d');

        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Node class for neural network visualization
        class Node {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#4a90e2';
                ctx.fill();
            }
        }

        // Create nodes - reduce count for mobile devices
        const nodeCount = window.innerWidth < 768 ? 50 : 100;
        const nodes = Array.from({ length: nodeCount }, () => new Node());

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw nodes
            nodes.forEach(node => {
                node.update();
                node.draw();
            });

            // Draw connections - reduce connection distance for mobile
            const connectionDistance = window.innerWidth < 768 ? 80 : 100;
            
            nodes.forEach((nodeA, i) => {
                nodes.slice(i + 1).forEach(nodeB => {
                    const distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(nodeA.x, nodeA.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        ctx.strokeStyle = `rgba(74, 144, 226, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        // Typing Animation
        const texts = [
            "I'm a Developer",
            "I'm a Robotics Engineer",
            "I'm a Designer"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;

        function typeText() {
            const typingElement = document.getElementById('typing-text');
            const currentText = texts[textIndex];

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, newTextDelay);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeText, isDeleting ? erasingDelay : typingDelay);
        }

        // Handle window resize - update node count
        window.addEventListener('resize', () => {
            // Adjust node count based on screen size
            const newNodeCount = window.innerWidth < 768 ? 50 : 100;
            
            // Only recreate nodes if count changed
            if (nodes.length !== newNodeCount) {
                nodes.length = 0; // Clear existing nodes
                for (let i = 0; i < newNodeCount; i++) {
                    nodes.push(new Node());
                }
            }
        });

        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            animate();
            typeText();
        });

        // Projects Data
        const projects = [
            {
                id: 5,
                title: "ML AI Robotic Hand",
                description: "ML AI Robotic Hand",
                image: "https://img.youtube.com/vi/ToPGLrrCLG0/maxresdefault.jpg",
                category: "hardware",
                link: "https://www.youtube.com/watch?v=ToPGLrrCLG0&ab_channel=newbotics"
            },
            {
                id: 4,
                title: "Full Stack App - 6000$ 1st Place Kasa AI",
                description: "AI-powered immigration support application with seamless integration for document processing and status tracking",
                image: "kasa.png",
                category: "software",
                link: "#"
            },
            {
                id: 1,
                title: "EcoSnap",
                description: "AI-powered sustainable lifestyle solution | 1st Place Overall Hackathon",
                image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/976/121/datas/gallery.jpg",
                category: "software",
                link: "#"
            },
                {
                    id: 2,
                    title: "Discerning",
                    description: "Discord API | UI/UX Hackathon Winner",
                    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/579/225/datas/gallery.jpg",
                    category: "web",
                    link: "#"
                },
            {
                id: 3,
                title: "Flash PDF",
                description: "Revolutionary study technique that converts PDFs to flashcards, increasing reading speed by 700%",
                image: "https://i.postimg.cc/TPV2SrqS/Screenshot-2024-09-06-at-10-18-48-AM.png",
                category: "web",
                link: "#"
            },
            {
                id: 6,
                title: "Battle Bot Spec Calculator",
                description: "Battle bots spec calcualtor to create and predict battle bots preformance",
                image: "src/Screenshot 2025-02-08 at 9.47.06 PM.png",
                category: "web",
                link: ""
            },
            {
                id: 7,
                title: "Desk Robotic Arm Full Design + 3d Print",
                description: "Desk Robotic arm Fully designed, 3d printed and PCB Printed",
                image: "src/Screenshot 2025-02-08 at 9.50.42 PM.png",
                category: "hardware",
                link: ""
            },
            {
                id: 8,
                title: "Wall Shoe Mount 3d Model",
                description: "Onshape Modeled Shoe mount for wall",
                image: "src/Screenshot 2025-02-09 at 12.21.29 AM.png",
                category: "hardware",
                link: ""
            },
            {
                id: 8,
                title: "EduBuddy - Hackathon",
                description: "Hack The Hill Submission. An app made to help students stay ogranized",
                image: "src/Screenshot 2025-02-09 at 12.26.01 AM.png",
                category: "web",
                link: ""
            },
            {
                id: 8,
                title: "Arduino Matrix Clock",
                description: "Arduino Matrix clock with IR remote",
                image: "src/IMG_AAD9ABE33042-1.jpeg",
                category: "hardware",
                link: ""
            },
            {
                id: 9,
                title: "EcoCloset",
                description: "Snap, Value, Sustain: Fashion's Sustainable Future",
                image: "src/gallery.jpg",
                category: "web",
                link: ""
            },
            {
                id: 9,
                title: "Focus Chrome Extension",
                description: "No No Zone is a Chrome Extension Aiming to work on increasing focus during the pandemic",
                image: "src/Screenshot 2025-02-09 at 12.37.59 AM.png",
                category: "software",
                link: ""
            },
            {
                id: 9,
                title: "Arduino Odradrek (WIP)",
                description: "The Odradek serves as a multi-function scanning device 3d printed that is inspired by the video game",
                image: "src/Screenshot 2025-02-09 at 12.41.04 AM.png",
                category: "hardware",
                link: ""
            }

        ];

        // Filter Projects
        function filterProjects(category) {
            const projectsGrid = document.querySelector('.projects-grid');
            projectsGrid.innerHTML = '';

            const filteredProjects = category === 'all'
                ? projects
                : projects.filter(project => project.category === category);

            filteredProjects.forEach(project => {
                const projectCard = `
                    <div class="project-card">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <div class="project-info">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <a href="${project.link}" class="learn-more-btn">Learn More</a>
                        </div>
                    </div>
                `;
                projectsGrid.innerHTML += projectCard;
            });
        }

        // Initialize Projects and Add Filter Functionality
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize animations
            animate();
            typeText();
            
            // Initialize projects
            filterProjects('all');

            // Add filter button functionality
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    filterProjects(button.getAttribute('data-filter'));
                });
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
