let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images .slide');
    const totalSlides = slides.length;

    // Wrap around logic
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Move the carousel
    const offset = -currentSlide * 100; // Move left based on the current slide
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Change slide based on direction
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Show the first slide on load
showSlide(currentSlide);

// Show the corresponding section when the text is clicked
function showSection(sectionId) {
    // Hide the carousel
    const carousel = document.getElementById('carousel');
    carousel.style.opacity = 0; // Fade out carousel

    setTimeout(() => {
        carousel.style.display = 'none'; // Hide carousel after fade out

        // Hide all sections
        const sections = document.querySelectorAll('.hidden-section');
        sections.forEach(section => {
            section.classList.remove('show');
            section.style.display = 'none'; // Ensure they are not displayed
        });

        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        selectedSection.style.display = 'block'; // Show the section
        selectedSection.classList.add('show'); // Trigger the fade-in animation
    }, 500); // Match the timeout with the transition duration
}

// Hide the hidden section and show the carousel
function hideSection() {
    const sections = document.querySelectorAll('.hidden-section');
    sections.forEach(section => {
        section.classList.remove('show');
        section.style.display = 'none'; // Ensure they are not displayed
    });

    const carousel = document.getElementById('carousel');
    carousel.style.display = 'block'; // Show carousel
    carousel.style.opacity = 1; // Fade in carousel
}

// Smooth scroll to section
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Tabs functionality
function openTab(evt, tabName) {
    const tabContent = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContent.forEach(content => {
        content.classList.remove('active');
    });

    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.content-section');

    // Function to check visibility of sections
    const checkVisibility = () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Check if the section is in view
            if (scrollPosition > sectionTop + sectionHeight / 3) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    // Initial check on page load
    checkVisibility();

    // Add a scroll event listener
    window.addEventListener('scroll', checkVisibility);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start' // Align to the top of the target
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Show loading screen for 3 seconds
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0'; // Start fade out

        // Wait for the transition to finish before hiding
        setTimeout(function() {
            loadingScreen.style.visibility = 'hidden'; // Hide it completely
            document.getElementById('main-content').style.display = 'block'; // Show main content
            document.body.style.overflow = ''; // Restore scrolling
        }, 500); // Match this with the CSS transition duration
    }, 3000); // 3000 milliseconds = 3 seconds
});




 // Accordion Functionality
 document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.classList.toggle('active');

        // Hide all other contents
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = "none";
                item.previousElementSibling.classList.remove('active');
            }
        });

        // Toggle visibility of the clicked content
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            dots[i].classList.remove('active');
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
    
    function currentSlide(n) {
        slideIndex = n - 1; // Adjust for zero-based index
        showSlides();
    }
});