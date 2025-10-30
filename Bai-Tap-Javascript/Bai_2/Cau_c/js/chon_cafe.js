document.getElementById("btnChon").addEventListener("click", function () {
  // Lấy tất cả checkbox có name="cafe"
  const checkboxes = document.querySelectorAll('input[name="cafe"]:checked');
  const result = document.getElementById("ketqua");

  // Nếu không chọn gì
  if (checkboxes.length === 0) {
    result.textContent = "Bạn chưa chọn loại cafe nào!";
    result.style.color = "orange";
    return;
  }

  // Lấy danh sách các giá trị đã chọn
  const selected = Array.from(checkboxes).map(cb => cb.value);

  // Hiển thị ra giao diện
  result.textContent = selected.join(", ") + ",";
  result.style.color = "red";
});
