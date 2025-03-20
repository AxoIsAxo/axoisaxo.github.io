function toggleTheme() {
  document.body.classList.toggle("dark");
  const icon = document.querySelector(".theme-toggle");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}
