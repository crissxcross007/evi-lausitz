fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("menu-container").innerHTML = html;

    // Jetzt ist das HTML da – wir holen uns alle nötigen Elemente
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    // Burger-Menü Toggle
    if (burger && navLinks) {
      burger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("mobile-open");

        if (!isOpen) {
          // Wenn Menü geschlossen wird, alle Dropdowns schließen
          document.querySelectorAll(".dropdown-content.open").forEach(drop => {
            drop.classList.remove("open");
          });
        }
      });
    }

    // Mobile Dropdown-Toggles
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        // Nur auf kleinen Bildschirmen
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = toggle.closest(".dropdown");
          const submenu = parent.querySelector(".dropdown-content");

          // Toggle Dropdown sichtbar
          if (submenu) {
            submenu.classList.toggle("open");
          }
        }
      });
    });
  })
  .catch(err => {
    console.error("Fehler beim Laden des Menüs:", err);
  });
