const button = document.getElementById('menu-button');
const menu = document.getElementById('dropdown-menu');

// Toggle dropdown saat tombol diklik
button.addEventListener('click', (event) => {
  event.stopPropagation(); // Mencegah event bubbling
  menu.classList.toggle('hidden');
  const isVisible = !menu.classList.contains('hidden');
  button.setAttribute('aria-expanded', isVisible.toString());
});

// Tutup dropdown jika diklik di mana saja di luar tombol dan dropdown
document.addEventListener('click', (event) => {
  if (!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
    button.setAttribute('aria-expanded', 'false');
  }
});

// Tutup dropdown jika diklik di dalam area dropdown
menu.addEventListener('click', () => {
  menu.classList.add('hidden');
  button.setAttribute('aria-expanded', 'false');
});
