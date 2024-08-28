document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function animateSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', animateSections);
    animateSections(); // To animate sections already in view on page load
});
