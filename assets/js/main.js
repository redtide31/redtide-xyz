(function () {
  const root = document.documentElement;
  const key = "rt_theme";
  const saved = localStorage.getItem(key);

  if (saved === "dark" || saved === "light") {
    root.setAttribute("data-theme", saved);
  }

  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem(key, next);
      btn.setAttribute("aria-label", `Switch to ${next === "light" ? "dark" : "light"} mode`);
    });
  }
})();
