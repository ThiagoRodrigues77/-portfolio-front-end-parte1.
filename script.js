const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Verifica se o usuário já escolheu um tema antes
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggleBtn.textContent = "☀️";
}

// Alterna entre temas
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
