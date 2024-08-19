// script.js
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
  
    searchIcon.addEventListener('click', function() {
      if (searchInput.style.display === 'block') {
        searchInput.style.display = 'none'; // Sembunyikan input jika sudah terlihat
      } else {
        searchInput.style.display = 'block'; // Tampilkan input
        searchInput.focus(); // Fokus pada input setelah ditampilkan
      }
    });
});
  
// script.js
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const menuInput = document.getElementById('menu-input');

  menuIcon.addEventListener('click', function() {
    if (menuInput.style.display === 'block') {
      menuInput.style.display = 'none'; // Sembunyikan input jika sudah terlihat
    } else {
      menuInput.style.display = 'block'; // Tampilkan input
      menuInput.focus(); // Fokus pada input setelah ditampilkan
    }
  });
});


// Menangani klik pada ikon menu
document.getElementById('menu-icon').addEventListener('click', function() {
  this.classList.toggle('active');
});