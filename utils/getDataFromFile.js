// Fungsi untuk membaca data dari file JSON
async function fetchData() {
  try {
    // Fetch file JSON
    const response = await fetch('data.json');

    // Periksa jika fetch gagal
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parsing data JSON
    const data = await response.json();

    // Render data ke HTML
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = data.users
      .map(
        (user) =>
          `<div class="p-4 bg-white rounded shadow">
              <p><strong>ID:</strong> ${user.id}</p>
              <p><strong>Name:</strong> ${user.name}</p>
              <p><strong>Age:</strong> ${user.age}</p>
            </div>`
      )
      .join('');
  } catch (error) {
    console.error('Fetch error:', error);
    document.getElementById('result').textContent =
      'Failed to load data. Please check the console.';
  }
}

// Panggil fungsi
fetchData();
