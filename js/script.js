document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("messageForm");
  const result = document.getElementById("messageResult");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const pesan = document.getElementById("pesan").value;

    if (!nama || !tanggal || !gender || !pesan) {
      alert("Semua field wajib diisi!");
      return;
    }

    result.innerHTML = `
      <p><strong>Current time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${pesan}</p>
    `;
  });
});
