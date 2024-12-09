const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');

// Buka modal
function openModal() {
  modal.classList.remove('hidden');
}

// Tutup modal
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
