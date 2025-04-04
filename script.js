var musik = "hbd.mp3"; // Pastikan file berada di direktori yang benar

// Membuat instance audio
var audio = new Audio(musik);
audio.loop = true; // Mengatur agar musik diulang
audio.autoplay = true; // Mengatur agar musik autoplay

// Fungsi untuk memulai pemutaran musik saat pengguna mengklik
function mulai() {
  audio.play(); // Memutar musik
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll;";
  setTimeout(function () {
    document.querySelector(".open").style.display = "none";
  }, 1000);
}

// Inisialisasi AOS
AOS.init({
  once: true,
});

// Fungsi untuk membuka WhatsApp dengan pesan kustom
function wa(isi) {
  window.open(
    "https://api.whatsapp.com/send?text= Makasih ya udah inget ultah akuu, di hari spesial ini aku pengin " +
      isi
  );
}

// Fungsi SweetAlert untuk menanyakan keinginan di hari spesial
async function tanya() {
  var { value: kado } = await swal.fire({
    title: "Di hari spesial ini kamu pengin nya apa?",
    input: "text",
    showCancelButton: false,
  });

  if (kado) {
    await swal.fire("Kirim jawabannya ke wa aku ya");
    wa(kado);
  } else {
    await swal.fire("Jangan dikosongin dong");
    tanya();
  }
}