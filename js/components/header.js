export function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  // Example: add a click handler to the title
  const title = header.querySelector('h1');
  title?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
