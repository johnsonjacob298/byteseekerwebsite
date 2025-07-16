// script.js
function initThemeToggle() {
  const btn = document.querySelector('.toggle-theme');
  if (!btn) return;

  // Check saved preference
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark-mode');

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
}
