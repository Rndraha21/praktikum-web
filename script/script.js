const msg = document.getElementById("msg");
const btn = document.getElementById("btn-submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  msg.classList.toggle("hidden");

  if (nama != "" && email != "" && pesan != "") {
    msg.textContent = "Pesan terkirim";
    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pesan").value = "";
  } else {
    msg.textContent = "Silahkan isi semua form terlebih dahulu";
  }

  setTimeout(() => {
    msg.classList.toggle("hidden");
  }, 3000);
});
