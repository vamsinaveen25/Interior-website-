


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-item a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, #6a11cb, #2575fc)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #ff7e5f, #feb47b)';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#FFD700';
        });

        link.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });

        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});