/* ============================================================
   forms.js · mostrar contraseña y demostración de estados
   ============================================================ */
(function () {
  "use strict";

  /* Inicio de sesión de demostración: navega al registro sin enviar datos */
  var loginForm = document.querySelector("[data-login-form]");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "productos.html";
    });
  }

  /* Mostrar / ocultar contraseña */
  var togglePassword = document.querySelector("[data-toggle-password]");
  var password = document.getElementById("contrasena");

  if (togglePassword && password) {
    togglePassword.addEventListener("change", function () {
      password.type = togglePassword.checked ? "text" : "password";
    });
  }

  /* Demostración del formulario de producto:
     - Si faltan campos obligatorios, muestra el estado de error.
     - Si todo está diligenciado, muestra el estado de éxito. */
  var productForm = document.querySelector("[data-product-form]");

  if (productForm) {
    productForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var requiredFields = productForm.querySelectorAll("[required]");
      var hasEmpty = Array.prototype.some.call(requiredFields, function (field) {
        return !field.value.trim();
      });

      if (hasEmpty) {
        window.location.href = "errores.html";
      } else {
        window.location.href = "productos.html?ok=1";
      }
    });
  }

  /* Estado de éxito en la pantalla de registro */
  var successBanner = document.getElementById("success-banner");
  var params = new URLSearchParams(window.location.search);

  if (successBanner && params.get("ok") === "1") {
    successBanner.hidden = false;
    successBanner.focus();
  }
})();
