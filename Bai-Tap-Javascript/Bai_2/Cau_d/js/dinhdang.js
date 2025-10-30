const btnDoi = document.getElementById("btnDoi");
const btnCancel = document.getElementById("btnCancel");
const chonMau = document.getElementById("chonmau");
const doanVan = document.getElementById("doanvan");

btnDoi.addEventListener("click", () => {
  const loai = document.querySelector('input[name="chon"]:checked');
  const mau = chonMau.value;

  if (!loai) {
    alert("Vui lòng chọn kiểu định dạng (Background hoặc Font)!");
    return;
  }
  if (mau === "") {
    alert("Vui lòng chọn màu cần đổi!");
    return;
  }

  if (loai.value === "bg") {
    doanVan.style.backgroundColor = mau;
  } else if (loai.value === "font") {
    doanVan.style.color = mau;
  }
});

btnCancel.addEventListener("click", () => {
  // Trả lại mặc định
  doanVan.style.backgroundColor = "";
  doanVan.style.color = "";
  chonMau.value = "";
  document.querySelectorAll('input[name="chon"]').forEach(r => r.checked = false);
});
