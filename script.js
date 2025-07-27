function initThemeToggle() {
  const btn = document.querySelector('.toggle-theme');
  if (!btn) return;

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
  }

  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}
