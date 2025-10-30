function tinh(phep) {
  const so1 = document.getElementById("so1").value.trim();
  const so2 = document.getElementById("so2").value.trim();
  const err1 = document.getElementById("err1");
  const err2 = document.getElementById("err2");
  const kq = document.getElementById("ketqua");

  // Reset lỗi
  err1.textContent = "";
  err2.textContent = "";
  kq.textContent = "--";

  // Kiểm tra nhập hợp lệ
  if (so1 === "" || isNaN(so1)) {
    err1.textContent = "(*) Vui lòng nhập số hợp lệ!";
    return;
  }
  if (so2 === "" || isNaN(so2)) {
    err2.textContent = "(*) Vui lòng nhập số hợp lệ!";
    return;
  }

  const a = parseFloat(so1);
  const b = parseFloat(so2);
  let result;

  switch (phep) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/':
      if (b === 0) { kq.textContent = "Không thể chia cho 0!"; return; }
      result = a / b; break;
    case '%':
      if (b === 0) { kq.textContent = "Không thể chia dư cho 0!"; return; }
      result = a % b; break;
  }

  kq.textContent = result;
}
