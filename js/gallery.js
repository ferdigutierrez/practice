function loadGallery() {
  const gallery = document.getElementById('gallery');
  let row;

  for (let i = 1; i <= 39; i++) {
    if ((i - 1) % 3 === 0) {
      row = document.createElement('div');
      row.className = 'gallery-row';
      gallery.appendChild(row);
    }

    const img = document.createElement('img');
    img.src = `img/${i}.jpg`;
    img.alt = `Wallpaper ${i}`;

    row.appendChild(img);
  }
}

window.addEventListener('DOMContentLoaded', loadGallery);