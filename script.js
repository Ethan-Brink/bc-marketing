document.addEventListener("DOMContentLoaded", () => {
    // Show welcome message
    alert("Welcome to BC Marketing! Let's create something beautiful together!");

    // Automatically update the year in the footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Popup message
    const popup = document.getElementById("popup");
    const btn = document.getElementById("messageBtn");
    const close = document.querySelector(".close-btn");

    if (btn && close && popup) {
        btn.onclick = () => popup.style.display = "flex";
        close.onclick = () => popup.style.display = "none";
        window.onclick = (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        };
    }

    // Dark Mode Toggle
    const toggleBtn = document.getElementById("darkModeToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            toggleBtn.textContent = document.body.classList.contains("dark-mode")
                ? "☀ Light Mode"
                : "🌙 Dark Mode";
        });
    }

    // Contact Form Alert
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your message! We will get back to you soon.");
            this.reset();
        });
    }

    // Image Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(currentSlide); // show first image
        setInterval(nextSlide, 3000); // every 3 seconds
    } else {
        console.warn("No slides found");
    }
});