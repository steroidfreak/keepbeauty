document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Improved Accordion functionality
    const accordions = document.getElementsByClassName("accordion");
    Array.from(accordions).forEach(accordion => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // Language switcher
    const languageOptions = document.querySelectorAll('.lang-option');
    const contentEn = document.getElementById('content-en');
    const contentZh = document.getElementById('content-zh');

    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Remove active class from all options
            languageOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');

            // Switch content based on the selected language
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