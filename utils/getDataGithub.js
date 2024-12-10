// URL file JSON di GitHub Pages
const url = 'https://username.github.io/my-website/data.json';

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Gagal mengambil data!');
    }
    const data = await response.json();

    // Render data ke HTML
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = data.users
      .map(
        (user) =>
          `<div class="p-4 bg-white rounded shadow">
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Age:</strong> ${user.age}</p>
          </div>`
      )
      .join('');
  } catch (error) {
    console.error(error);
    document.getElementById('result').textContent = 'Data tidak dapat diambil.';
  }
}

// Panggil fungsi saat halaman dimuat
fetchData();
