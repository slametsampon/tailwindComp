document.querySelectorAll('li.relative').forEach((menu) => {
  const button = menu.querySelector('button');
  const dropdown = menu.querySelector('ul');

  // Tampilkan/ Sembunyikan dropdown saat tombol diklik
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Mencegah event bubbling
    dropdown.classList.toggle('hidden');
  });

  // Tutup dropdown saat sub-menu diklik
  dropdown.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      dropdown.classList.add('hidden');
    });
  });

  // Tutup dropdown saat klik di luar area
  document.addEventListener('click', () => {
    dropdown.classList.add('hidden');
  });
});
