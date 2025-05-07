document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Function to apply the theme
  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark-mode");
      themeToggleBtn.textContent = "Light Mode";
    } else {
      body.classList.remove("dark-mode");
      themeToggleBtn.textContent = "Dark Mode";
    }
  };

  // Check for saved theme preference
  let savedTheme = localStorage.getItem("theme");

  // If no saved theme, check prefers-color-scheme
  if (
    !savedTheme &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    savedTheme = "dark";
  } else if (!savedTheme) {
    savedTheme = "light"; // Default to light if no preference
  }

  applyTheme(savedTheme); // Apply initially

  // Theme toggle button event listener
  themeToggleBtn.addEventListener("click", () => {
    let newTheme;
    if (body.classList.contains("dark-mode")) {
      newTheme = "light";
    } else {
      newTheme = "dark";
    }
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
