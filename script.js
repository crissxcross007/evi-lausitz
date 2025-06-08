fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("menu-container").innerHTML = html;

    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    // Burger-Menu Toggle
    if (burger && navLinks) {
      burger.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");
      });
    }

    // Dropdown Toggle für Mobile
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", e => {
        // Nur bei kleinen Screens aktiv
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
