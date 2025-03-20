// Load saved theme or default to dark
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const toggleIcon = document.querySelector(".theme-toggle");

  if (savedTheme) {
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
    toggleIcon.textContent = savedTheme === "light" ? "☀️" : "🌙";
  } else {
    body.classList.add("dark");
    toggleIcon.textContent = "🌙";
  }
});

// Toggle light/dark theme
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector(".theme-toggle");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    icon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    icon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

// Copy server IP to clipboard with custom notification
function copyIP() {
  const ip = "play.axosmp.fun";
  navigator.clipboard.writeText(ip).then(() => {
    const notification = document.getElementById("copy-notification");
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  });
}
