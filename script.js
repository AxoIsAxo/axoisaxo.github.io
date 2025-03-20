// Check for saved theme in localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    // Default to dark mode if no saved preference
    document.body.classList.add('dark');
  }
});

// Toggle between dark and light modes
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector(".theme-toggle");

  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    icon.textContent = "☀️";
    localStorage.setItem("theme", "light"); // Save light mode in localStorage
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    icon.textContent = "🌙";
    localStorage.setItem("theme", "dark"); // Save dark mode in localStorage
  }
}
