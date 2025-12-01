/* ----- Smooth Scroll (JS Feature #1) ----- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

/* ----- Toggle (Show/Hide) Sections (JS Feature #2) ----- */
function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

/* ----- Optional: Highlight Broken Images ----- */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
        img.onerror = () => {
            img.style.opacity = "0.4";
            img.style.border = "2px solid red";
        };
    });
});
