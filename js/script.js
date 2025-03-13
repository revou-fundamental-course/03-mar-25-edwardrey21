
// Cara cek js connect atau tidak dengan HTML
console.log('JS Working');

// Menampilkan nama auto
function updateName() {
    // Ambil nilai dari input
    const name = document.getElementById("nameauto").value;
    
    // Jika input tidak kosong, ubah teks di #nama-auto
    if (name.trim() !== "") {
        document.getElementById("nama-auto").textContent = name;
    } else {
        document.getElementById("nama-auto").textContent = "Guest";
    }
}

// Menampilkan Slideshow

let bannerIndex = 0;

function changeBanner() {
    // Dapatkan semua elemen dengan class 'img-slideshow'
    const banners = document.getElementsByClassName('img-slideshow');

    // Sembunyikan semua banner
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // Naikkan index dan reset jika melebihi panjang array
    bannerIndex++;
    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Tampilkan banner sesuai index saat ini
    banners[bannerIndex].style.display = 'block';
}

function showBanner() {
    const banners = document.getElementsByClassName('img-slideshow');

    if (banners.length === 0) return;

    // Sembunyikan semua banner
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // Tampilkan banner pertama
    banners[bannerIndex].style.display = 'block';
}

// Tampilkan banner pertama kali saat halaman dimuat
showBanner();

// Ubah banner setiap 3 detik
setInterval(changeBanner, 3000);



// Menampilkan Output
function tampilkanOutput(event) {

    event.preventDefault(); // Mencegah form refresh halaman

    // Ambil nilai dari input
    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("birthdate").value;
    let jeniskelamin = document.querySelector('input[name="jeniskelamin"]:checked');
    let pesan = document.getElementById("pesan").value;
    
    // Tampilkan di paragraf dengan id
    document.getElementById("outputNama").innerHTML = "<b>Nama: </b>" + name;
    document.getElementById("outputLahir").innerHTML = "<b>Tanggal Lahir: </b>" + birthdate;
    document.getElementById("outputJeniskelamin").innerHTML = "<b>Jenis Kelamin: </b>"+ jeniskelamin.value;
    document.getElementById("outputPesan").innerHTML = "<b>Pesan: </b>" + pesan;

}




