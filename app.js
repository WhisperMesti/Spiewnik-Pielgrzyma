const listScreen = document.getElementById('list-screen');
const songScreen = document.getElementById('song-screen');
const songListEl = document.getElementById('song-list');
const searchInput = document.getElementById('search-input');
const pageInput = document.getElementById('page-input');
const pageGoBtn = document.getElementById('page-go-btn');
const backBtn = document.getElementById('back-btn');
const songTitleEl = document.getElementById('song-title');
const songLyricsEl = document.getElementById('song-lyrics');

// Render the list of songs (filtered or full)
function renderList(filter = '') {
  const normalized = filter.trim().toLowerCase();
  const filtered = songs.filter(s =>
    s.title.toLowerCase().includes(normalized)
  );

  songListEl.innerHTML = '';
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

// Initial render
renderList();