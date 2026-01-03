// Ambil form login
const form = document.querySelector("form");

// Data login (contoh)
const usernameBenar = "backburner";
const passwordBenar = "nadila";

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form reload halaman

    // Ambil nilai input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validasi login
    if (username === usernameBenar && password === passwordBenar) {
        alert("Login berhasil!");
        window.location.href = "biodata.html"; // pindah halaman
    } else {
        alert("Username atau password salah!");
    }
});
