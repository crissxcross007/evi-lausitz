// Menü laden, wenn #menu-container existiert
document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");

  if (menuContainer) {
    fetch("menu.html")
      .then(res => res.text())
      .then(html => {
        menuContainer.innerHTML = html;
        setupMenuInteractions(); // Events nach dem Einfügen binden
      })
      .catch(err => console.error("Fehler beim Laden von menu.html:", err));
  } else {
    setupMenuInteractions(); // Menü ist direkt im HTML enthalten
  }
});

// Alle Event-Handler setzen
function setupMenuInteractions() {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // Burger-Menü öffnen/schließen
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  // Dropdowns auf Touch-Geräten (kleine Displays)
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Verhindert Link-Ziel

        const parent = toggle.closest(".dropdown");
        const submenu = parent.querySelector(".dropdown-content");

        // Andere Dropdowns schließen
        document.querySelectorAll(".dropdown-content.open").forEach(openMenu => {
          if (openMenu !== submenu) {
            openMenu.classList.remove("open");
          }
        });

        // Aktuelles Dropdown toggeln
        if (submenu) {
          submenu.classList.toggle("open");
        }
      }
    });
  });
}
