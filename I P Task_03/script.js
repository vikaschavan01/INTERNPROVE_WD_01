// script.js

// Example: Add a scroll effect for the navigation bar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});

// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
