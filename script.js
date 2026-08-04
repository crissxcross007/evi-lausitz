// Menü und Footer laden
document.addEventListener("DOMContentLoaded", () => {

  // Menü laden
  fetch("/menu.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;
      initMenuEvents();
    });

  // Footer laden
  fetch("/footer.html")
    .then(res => res.text())
    .then(html => {
      const footer = document.getElementById("site-footer");
      if (footer) {
        footer.innerHTML = html;
      }
    });

});

function initMenuEvents() {

  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Dropdown-Öffnung auf Mobil per Klick
  const dropdownToggle = document.querySelector(".dropdown > .dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }

}
