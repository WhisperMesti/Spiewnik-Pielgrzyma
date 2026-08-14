const listScreen = document.getElementById('list-screen');
const songScreen = document.getElementById('song-screen');
const songListEl = document.getElementById('song-list');
const searchInput = document.getElementById('search-input');
const pageInput = document.getElementById('page-input');
const pageGoBtn = document.getElementById('page-go-btn');
const backBtn = document.getElementById('back-btn');
const songTitleEl = document.getElementById('song-title');
const songLyricsEl = document.getElementById('song-lyrics');
const fontSmallerBtn = document.getElementById('font-smaller-btn');
const fontBiggerBtn = document.getElementById('font-bigger-btn');
const maxPageNumber = Math.max(...songs.map(s => s.number));

let fontSize = 18; // starting size in px, matches CSS default
const FONT_MIN = 14;
const FONT_MAX = 28;
const FONT_STEP = 2;

function applyFontSize() {
  songLyricsEl.style.fontSize = fontSize + 'px';
}

function changeFontSize(delta) {
  fontSize = Math.min(FONT_MAX, Math.max(FONT_MIN, fontSize + delta));
  applyFontSize();
  localStorage.setItem('songbook-font-size', fontSize);
}

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
  applyFontSize();
  listScreen.classList.remove('active');
  songScreen.classList.add('active');
  window.scrollTo(0, 0);
}

// Go back to the list
function goBack() {
  songScreen.classList.remove('active');
  listScreen.classList.add('active');
}

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

