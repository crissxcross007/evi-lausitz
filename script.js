fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("menu-container").innerHTML = html;

    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
      burger.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");
      });
    }

    const dropdownToggles = document.querySelectorAll(".dropdown > a");
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const dropdown = toggle.parentElement;
          const content = dropdown.querySelector(".dropdown-content");
          content.classList.toggle("open");
        }
      });
    });
  });
