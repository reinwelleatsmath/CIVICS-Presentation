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
    

    // Team Member More Info Toggle
    document.querySelectorAll('.more-info-btn').forEach(button => {
        button.addEventListener('click', function() {
            const member = this.parentElement;
            member.classList.toggle('active');
            const info = member.querySelector('.more-info');
            info.style.display = info.style.display === "block" ? "none" : "block";
        });
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

    // Show scroll-to-top button when scrolling down
    window.onscroll = function() {
        const scrollTopButton = document.querySelector('.scroll-top');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    };

    // Scroll to top function
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Attach scrollToTop function to button
    document.querySelector('.scroll-top').addEventListener('click', scrollToTop);
});


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
