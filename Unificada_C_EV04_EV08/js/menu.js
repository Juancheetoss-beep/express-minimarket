/* ============================================================
   menu.js · menú lateral colapsable en móvil
   ============================================================ */
(function () {
  "use strict";

  var toggle = document.querySelector("[data-menu-toggle]");
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");

  if (!toggle || !sidebar || !overlay) {
    return;
  }

  var firstLink = sidebar.querySelector("a");

  function openMenu(moveFocus) {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Cerrar menú");
    document.body.classList.add("menu-open");
    if (moveFocus && firstLink) {
      firstLink.focus();
    }
  }

  function closeMenu() {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("menu-open");
  }

  toggle.addEventListener("click", function () {
    if (sidebar.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu(true);
    }
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && sidebar.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  sidebar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 900px)").matches) {
        closeMenu();
      }
    });
  });

  /* Permite abrir el menú con ?menu=open para la captura de evidencia */
  var params = new URLSearchParams(window.location.search);
  if (params.get("menu") === "open") {
    openMenu(false);
  }
})();
