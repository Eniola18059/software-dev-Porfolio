document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded successfully!");

    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjusting for the navbar
                behavior: "smooth"
            });
        });
    });

    // Scroll Animations (example for About section)
    const aboutSection = document.getElementById("about");
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__fadeIn");
            }
        });
    }, {
        threshold: 0.5
    });
    aboutObserver.observe(aboutSection);

    // Contact Form Validation (basic example)
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", (e) => {
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert("Please fill in all fields.");
        } else {
            console.log("Form submitted successfully!");
        }
    });
});
