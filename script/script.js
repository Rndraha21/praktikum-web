const msg = document.getElementById("msg");
const btn = document.getElementById("btn-submit");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const pesan = document.getElementById("pesan");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  msg.classList.toggle("hidden");
  setTimeout(() => {
    msg.classList.toggle("hidden");
  }, 5000);

  nama.value = "";
  email.value = "";
  pesan.value = "";
});
