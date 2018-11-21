function kalkulator() {
  let angka = document.querySelectorAll("input");
  let i1 = angka[0].value; //angka pertama
  let i2 = angka[1].value; //angka kedua
  angka[2].value = Number(i1) + Number(i2);
}
let tombol = document.querySelector(".equal");
tombol.addEventListener("click", kalkulator); 