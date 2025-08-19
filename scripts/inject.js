// Escape HTML meta-characters in a string
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function (m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const includes = document.querySelectorAll('[data-include]');
  for (const el of includes) {
    const file = el.getAttribute('data-include');
    const resp = await fetch(file);
    if (resp.ok) {
      el.innerHTML = await resp.text();
    } else {
      el.innerHTML = `<p>Failed to load: ${escapeHTML(file)}</p>`;
    }
  }

  // Safely run after injection
  if (typeof initThemeToggle === "function") {
    initThemeToggle();
  }
});