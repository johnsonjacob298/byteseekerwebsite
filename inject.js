async function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  for (const el of includes) {
    const file = el.getAttribute('data-include');
    const resp = await fetch(file);
    if (resp.ok) {
      el.innerHTML = await resp.text();
    } else {
      el.innerHTML = `<p>Failed to load: ${file}</p>`;
    }
  }

  // 🔁 Delay theme toggle init to make sure injected DOM is parsed
  setTimeout(() => {
    if (typeof initThemeToggle === "function") {
      initThemeToggle();
    }
  }, 50); // short delay
}

includeHTML();
