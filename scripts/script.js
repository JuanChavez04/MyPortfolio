/* -----------------------------------------
   Smooth Scroll for Internal Links
----------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* -----------------------------------------
   Fade-In Animation for Sections
----------------------------------------- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});


/* -----------------------------------------
   Navbar Active Link Highlighting
----------------------------------------- */
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active-link");
    }
});


/* -----------------------------------------
   Placeholder for Future Features
   (Mobile menu, dark mode, etc.)
----------------------------------------- */
console.log("Portfolio script loaded.");

/* -----------------------------------------
   Accordion for Projects Page
----------------------------------------- */
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", () => {
        acc.classList.toggle("active");
        const panel = acc.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});