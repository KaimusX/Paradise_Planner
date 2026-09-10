import { initHeader } from './components/header.js';
import { formatDate } from './utils/helpers.js';
import { APP_NAME } from './data/constants.js';

function init() {
  console.log(`${APP_NAME} initialized on ${formatDate(new Date())}`);
  initHeader();
}

document.addEventListener('DOMContentLoaded', init);
