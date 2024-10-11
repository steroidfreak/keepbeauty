document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Language switcher
    const languageOptions = document.querySelectorAll('.lang-option');
    const contentEn = document.getElementById('content-en');
    const contentZh = document.getElementById('content-zh');

    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = option.getAttribute('data-lang');
            
            // Remove active class from all options
            languageOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            option.classList.add('active');

            if (lang === 'en') {
                contentEn.style.display = 'block';
                contentZh.style.display = 'none';
            } else if (lang === 'zh') {
                contentEn.style.display = 'none';
                contentZh.style.display = 'block';
            }
        });
    });
});