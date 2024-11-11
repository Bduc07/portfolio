// Add event listeners for each nav link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the targeted section only
        const targetId = this.getAttribute('href').substring(1);  // Get section ID without '#'
        document.getElementById(targetId).classList.add('active');
    });
});








