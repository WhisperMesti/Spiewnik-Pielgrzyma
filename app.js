const listScreen = document.getElementById('list-screen');
const songScreen = document.getElementById('song-screen');
const songListEl = document.getElementById('song-list');
const searchInput = document.getElementById('search-input');
const pageInput = document.getElementById('page-input');
const pageGoBtn = document.getElementById('page-go-btn');
const backBtn = document.getElementById('back-btn');
const songTitleEl = document.getElementById('song-title');
const songLyricsEl = document.getElementById('song-lyrics');
const fontSmallerBtnMain = document.getElementById('font-smaller-btn-main');
const fontBiggerBtnMain = document.getElementById('font-bigger-btn-main');
const fontSmallerBtn = document.getElementById('font-smaller-btn');
const fontBiggerBtn = document.getElementById('font-bigger-btn');
const maxPageNumber = Math.max(...songs.map(s => s.number));

let fontSize = 1; 
const FONT_MIN = 0.8;
const FONT_MAX = 1.6;
const FONT_STEP = 0.1;

function applyFontScale() {
  document.documentElement.style.setProperty('--font-scale', fontScale.toFixed(2));
  localStorage.setItem('songbook-font-scale', fontScale);
}

function changeFontScale(delta) {
  fontScale = Math.min(SCALE_MAX, Math.max(SCALE_MIN, +(fontScale + delta).toFixed(2)));
  applyFontScale();
}

[fontSmallerBtnMain, fontSmallerBtn].forEach(btn =>
  btn.addEventListener('click', () => changeFontScale(-SCALE_STEP))
);
[fontBiggerBtnMain, fontBiggerBtn].forEach(btn =>
  btn.addEventListener('click', () => changeFontScale(SCALE_STEP))
);

const savedScale = localStorage.getItem('songbook-font-scale');
if (savedScale) fontScale = parseFloat(savedScale);
applyFontScale()

pageInput.setAttribute('max', maxPageNumber);

pageInput.addEventListener('input', () => {
  let val = parseInt(pageInput.value, 10);
  if (isNaN(val)) return;
  if (val < 1) pageInput.value = 1;
  if (val > maxPageNumber) pageInput.value = maxPageNumber;
});

// Render the list of songs (filtered or full)
function renderList(filter = '') {
  const normalized = filter.trim().toLowerCase();
  const filtered = songs.filter(s =>
    s.title.toLowerCase().includes(normalized)
  );

  songListEl.innerHTML = '';

  if (filtered.length === 0) {
    songListEl.innerHTML = '<li class="empty-state" style="background:none;box-shadow:none;">Nie znaleziono piosenki.</li>';
    return;
  }

  filtered.forEach(song => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="num">${song.number}</span><span>${song.title}</span>`;
    li.addEventListener('click', () => openSong(song));
    songListEl.appendChild(li);
  });
}

// Open a single song's reading screen
function openSong(song) {
  songTitleEl.textContent = song.title;
  songLyricsEl.textContent = song.lyrics;
  listScreen.classList.remove('active');
  songScreen.classList.add('active');
  window.scrollTo(0, 0);
  history.pushState({ screen: 'song' }, '', '#song');
}

// Go back to the list
function goBack() {
  songScreen.classList.remove('active');
  listScreen.classList.add('active');
}

// Tapping the on-screen back arrow now goes through the same history mechanism
backBtn.addEventListener('click', () => {
  history.back();
});

// Phone's built-in back button/gesture triggers this automatically
window.addEventListener('popstate', () => {
  goBack();
});

// Jump directly to a song by page number
function goToPage() {
  const num = parseInt(pageInput.value, 10);
  const found = songs.find(s => s.number === num);
  if (found) {
    openSong(found);
    pageInput.value = '';
  } else {
    alert('Nie znaleziono piosenki o tym numerze.');
  }
}

searchInput.addEventListener('input', () => renderList(searchInput.value));
pageGoBtn.addEventListener('click', goToPage);
pageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') goToPage();
});
backBtn.addEventListener('click', goBack);

const savedFontSize = localStorage.getItem('songbook-font-size');
if (savedFontSize) fontSize = parseInt(savedFontSize, 10);

renderList();

fontSmallerBtn.addEventListener('click', () => changeFontSize(-FONT_STEP));
fontBiggerBtn.addEventListener('click', () => changeFontSize(FONT_STEP));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Service worker registered — offline mode ready.'))
      .catch((err) => console.error('Service worker registration failed:', err));
  });
}

const installBtn = document.getElementById('install-btn');
const installModal = document.getElementById('install-modal');
const installModalClose = document.getElementById('install-modal-close');
const installTriggerBtn = document.getElementById('install-trigger-btn');
const stepsIOS = document.getElementById('install-steps-ios');
const stepsAndroid = document.getElementById('install-steps-android');
const stepsGeneric = document.getElementById('install-steps-generic');

let deferredInstallPrompt = null;

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true;
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

// Capture Chrome/Android's native install prompt when it becomes available
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (!isStandalone()) {
    installBtn.style.display = 'inline-block';
  }
});

function openInstallModal() {
  stepsIOS.style.display = 'none';
  stepsAndroid.style.display = 'none';
  stepsGeneric.style.display = 'none';

  if (isIOS()) {
    stepsIOS.style.display = 'block';
  } else if (deferredInstallPrompt) {
    stepsAndroid.style.display = 'block';
  } else {
    stepsGeneric.style.display = 'block';
  }
  installModal.style.display = 'flex';
}

function closeInstallModal() {
  installModal.style.display = 'none';
}

installBtn.addEventListener('click', openInstallModal);
installModalClose.addEventListener('click', closeInstallModal);
installModal.addEventListener('click', (e) => {
  if (e.target === installModal) closeInstallModal();
});

installTriggerBtn.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  closeInstallModal();
  installBtn.style.display = 'none';
});

// Show the button on load if not already installed
// (iOS/other browsers won't fire beforeinstallprompt, so we show it manually there too)
if (!isStandalone()) {
  installBtn.style.display = 'inline-block';
}

// Hide it immediately if the app gets installed while open
window.addEventListener('appinstalled', () => {
  installBtn.style.display = 'none';
  deferredInstallPrompt = null;
});

