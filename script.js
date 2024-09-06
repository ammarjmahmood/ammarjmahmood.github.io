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
  });
  
  // Modal popup functionality
  function openProjectModal(projectId) {
      const modal = document.getElementById('projectModal');
      modal.style.display = 'block';
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
  
  let currentSlideIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    showSlides(currentSlideIndex);
});

// Function to show the current slide
function showSlides(index) {
    const slides = document.querySelectorAll('.slide');

    // If index is out of bounds, wrap around
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[currentSlideIndex].classList.add('active');
}

// Move the slide based on direction (1 for next, -1 for previous)
function moveSlide(direction) {
    currentSlideIndex += direction;
    showSlides(currentSlideIndex);
}

function openProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'block';
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
