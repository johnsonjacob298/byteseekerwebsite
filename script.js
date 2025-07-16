function initThemeToggle() {
  const btn = document.querySelector('.toggle-theme');
  if (!btn) return;

  // Apply saved preference
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
  }

  // Toggle on click
  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}
