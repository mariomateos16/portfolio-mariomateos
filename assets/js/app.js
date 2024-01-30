////////////////////////////////////    JS     ////////////////////////////////////////////////

/* MOVIMIENTOS HEADER */
    document.addEventListener('DOMContentLoaded', function () {
        function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            const sectionTop = section.offsetTop;

            window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
            });
        }
        }

        // Asocia la función a los enlaces correspondientes
        document.getElementById('link-about').addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('about');
        });

        document.getElementById('link-skills').addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('skills');
        });

        document.getElementById('link-projects').addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('projects');
        });

        document.getElementById('link-contact').addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('contact');
        });
    });

    /* MENU RESPONSIVE */
    document.addEventListener("DOMContentLoaded", function() {
    hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function() {
        navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    };
    
});
