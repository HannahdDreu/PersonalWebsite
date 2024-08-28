document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Menu Functionality
    const menuButton = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const closeButton = document.querySelector('.close-btn');

    menuButton.addEventListener('click', function() {
        sidebar.style.transform = 'translateX(0)';
        sidebar.setAttribute('aria-hidden', 'false');
    });

    closeButton.addEventListener('click', function() {
        sidebar.style.transform = 'translateX(100%)';
        sidebar.setAttribute('aria-hidden', 'true');
    });

    // Contact Form Functionality
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (firstName && lastName && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset(); // Reset the form after successful submission
        } else {
            alert('Please fill out all required fields.');
        }
    });
});
