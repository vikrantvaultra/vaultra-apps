// Runs before paint: apply a theme the visitor picked earlier (otherwise CSS follows the OS).
try {
  const t = localStorage.getItem('theme');
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
} catch {}
