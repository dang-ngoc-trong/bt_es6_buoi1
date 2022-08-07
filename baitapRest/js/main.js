function diemTB(...diem) {
  let tb = 0;
  for (let i = 0; i < diem.length; i++) {
    tb += diem[i] / diem.length;
  }
  return tb;
}

document.getElementById("btnKhoi1").onclick = function () {
  let diemToan = +document.getElementById("inpToan").value;
  let diemLY = +document.getElementById("inpLy").value;
  let diemHOA = +document.getElementById("inpHoa").value;
  let dtkhoia1 = diemTB(diemToan, diemHOA, diemLY);
  document.getElementById("tbKhoi1").innerHTML = dtkhoia1;
};
document.getElementById("btnKhoi2").onclick = function () {
  let diemVan = +document.getElementById("inpVan").value;
  let diemSu = +document.getElementById("inpSu").value;
  let diemDia = +document.getElementById("inpDia").value;
  let diemEnglish = +document.getElementById("inpEnglish").value;
  let dtkhoia2 = diemTB(diemVan, diemSu, diemDia, diemEnglish);
  document.getElementById("tbKhoi2").innerHTML = dtkhoia2;
};
