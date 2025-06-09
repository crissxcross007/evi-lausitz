// Menü via fetch laden
document.addEventListener("DOMContentLoaded", () => {
  fetch("menu.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;
      initMenuEvents(); // Interaktion aktivieren
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
      // Nur aktiv auf kleinen Bildschirmen
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }
}
