
const navToggle = document.getElementById("hamburger");
// const navMenu = document.getElementById("nav-menu");

    navToggle.addEventListener("click", () => {
      const navLinks = document.getElementById("nav-links")
      navLinks.classList.toggle("hidden")
    });