// Keeps the dark-mode toggle in sync; the initial theme is set by theme-init.js.
const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    toggleSwitch.checked = theme === "dark";
}

function savedTheme() {
    try {
        return localStorage.getItem("theme");
    } catch (e) {
        return null;
    }
}

toggleSwitch.checked =
    document.documentElement.getAttribute("data-theme") === "dark";

// Only an explicit click is remembered.
toggleSwitch.addEventListener("change", (e) => {
    const theme = e.target.checked ? "dark" : "light";
    applyTheme(theme);
    try {
        localStorage.setItem("theme", theme);
    } catch (err) {
    }
});

// Follow OS theme changes until the visitor picks one themselves.
darkQuery.addEventListener("change", (e) => {
    if (!savedTheme()) applyTheme(e.matches ? "dark" : "light");
});
