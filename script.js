function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// particlesJS.load('particles-js', 'particles.json', function() {
//   console.log('particles.js loaded');
// });
var typed = new Typed("#typing", {
  strings: ["Web Developer", "Java Enthusiast", "Spring Boot Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
document.getElementById("darkModeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});
