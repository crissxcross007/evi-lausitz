fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("menu-container").innerHTML = html;

    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    // Burger-Menü Toggle
    if (burger && navLinks) {
      burger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("mobile-open");

        if (!isOpen) {
          // Alle offenen Dropdowns schließen
          document.querySelectorAll(".dropdown-content.open").forEach(dropdown => {
            dropdown.classList.remove("open");
          });
        }
      });
    }

    // Dropdown Toggle für Mobile
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", e => {
        if (window.innerWidth <= 768) {
          e.preventDefault(); // Kein Link folgen
          const parent = toggle.closest(".dropdown");
          const submenu = parent.querySelector(".dropdown-content");

          if (submenu) {
            submenu.classList.toggle("open");
          }
        }
      });
    });
  });
