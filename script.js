//Show welocme message
window.onload = function() {
    alert("Welcome to BC Marketing! Let's create something beautiful together!");
};
//Automaticslly update the year in the footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
const popup = document.getElementById("popup");
const btn = document.getElementById("messageBtn");
const close = document.querySelector(".close-btn");

btn.onclick = () => popup.style.display = "flex";
close.onclick = () => popup.style.display = "none";
window.onclick = (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
};
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission
    alert("Thank you for your message! We will get back to you soon.");
    this.reset(); // Reset the form fields
});