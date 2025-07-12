// Toggle dark/light mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll animation
const sections = document.querySelectorAll(".section");
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, observerOptions);

sections.forEach(section => {
  section.classList.add("fade-in");
  observer.observe(section);
});

// Animation styles
const style = document.createElement("style");
style.innerHTML = `
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}`;
document.head.appendChild(style);

// Scroll progress bar
window.onscroll = function () {
  const scrollBar = document.getElementById("scroll-bar");
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollBar.style.width = scrolled + "%";
};

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");
  if (loader) loader.style.display = "none";
});
