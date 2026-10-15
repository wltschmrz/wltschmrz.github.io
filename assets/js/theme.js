(function () {
  "use strict";
  var root = document.documentElement;
  var system = window.matchMedia("(prefers-color-scheme: dark)");
  var choice = null;
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") choice = saved;
  } catch (error) { /* Storage may be unavailable in private browsing. */ }
  function apply() {
    var dark = choice ? choice === "dark" : system.matches;
    root.dataset.theme = dark ? "dark" : "light";
    var button = document.getElementById("theme-toggle");
    if (button) {
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      button.title = button.getAttribute("aria-label");
      document.getElementById("theme-icon").className = dark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? "#191b1f" : "#faf8f2";
  }
  apply();
  system.addEventListener("change", apply);
  window.addEventListener("storage", function (event) {
    if (event.key === "theme" || event.key === null) {
      choice = event.newValue === "dark" || event.newValue === "light" ? event.newValue : null;
      apply();
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    button.hidden = false;
    apply();
    button.addEventListener("click", function () {
      choice = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", choice); } catch (error) { /* Still usable without storage. */ }
      apply();
    });
  });
}());
