// Runs before first paint so dark-mode visitors don't see a light flash.
// An explicit choice (saved in localStorage) wins; otherwise follow the OS.
(function () {
  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {}
  const theme =
    saved ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  document.documentElement.setAttribute("data-theme", theme);
})();
