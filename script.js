// Set dark mode by default on page load
document.body.classList.add('dark');

// Toggle between dark and light modes
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector(".theme-toggle");
  
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    icon.textContent = "☀️";
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    icon.textContent = "🌙";
  }
}
