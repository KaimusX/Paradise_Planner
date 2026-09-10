export function createModal({ title = '', content = '' } = {}) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  overlay.innerHTML = `
    <div class="modal card">
      <h2>${title}</h2>
      <div class="modal-content">${content}</div>
      <button class="modal-close">Close</button>
    </div>
  `;

  overlay.querySelector('.modal-close').addEventListener('click', () => {
    overlay.remove();
  });

  document.body.appendChild(overlay);
  return overlay;
}
