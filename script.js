document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.scroll-section');
  const navLinks = document.querySelectorAll('.sidebar .nav-link');

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

  // ... (keep the rest of your existing JavaScript) ...
});
