async function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  for (const el of includes) {
    const file = el.getAttribute('data-include');
    const resp = await fetch(file);
    if (resp.ok) {
      el.innerHTML = await resp.text();
    } else {
      el.innerHTML = "<p>Failed to load component: " + file + "</p>";
    }
  }
}

includeHTML();
