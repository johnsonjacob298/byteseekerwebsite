function initThemeToggle() {
  const toggleButton = document.querySelector(".toggle-theme");

  if (!toggleButton) return;

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Optional: Save preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
}
