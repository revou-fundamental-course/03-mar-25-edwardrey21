
// Cara cek js connect atau tidak dengan HTML
console.log('JS Working');


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


