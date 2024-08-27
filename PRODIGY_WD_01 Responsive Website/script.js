// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scroll (Optional: Add for navigation or CTA button)
document.querySelectorAll('.nav-links a, .cta-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
