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

    VanillaTilt.init(document.querySelectorAll(".home__logo"), {
      max: 15,
    });

    var typed = new Typed(".typing-text", {
      strings: ["Desarrollador Frontend", "Diseñador Web", "Desarrollador Aplicaciones Web"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
  });

  document.addEventListener('DOMContentLoaded', function () {
    var miCard = document.querySelector('.projects__box');
    var textoOculto = miCard.querySelector('.project__layer');
  
    // Evento táctil para dispositivos móviles
    miCard.addEventListener('touchstart', function () {
      // Toggle de la visibilidad del texto
      textoOculto.style.display = (textoOculto.style.display === 'none' || textoOculto.style.display === '') ? 'block' : 'none';
    });
  
    // Evento hover para escritorio
    miCard.addEventListener('mouseover', function () {
      textoOculto.style.display = 'block';
    });
  
    // Evento de salida del hover para escritorio
    miCard.addEventListener('mouseout', function () {
      textoOculto.style.display = 'none';
    });
  });

    

particlesJS(
  {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#151c24"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#151c24",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);


particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
