function addStudent() {
    // Nhập MSSV
    let mssv = prompt("Nhập mã số SV:");
    if (mssv === null) return;
    mssv = mssv.trim();
    if (mssv === "") {
        alert("Mã số SV không được để trống!");
        return;
    }

    // Nhập Tên
    let ten = prompt("Nhập họ tên:");
    if (ten === null) return;
    ten = ten.trim();
    if (ten === "") {
        alert("Họ tên không được để trống!");
        return;
    }

    // Nhập Lớp
    let lop = prompt("Nhập lớp:");
    if (lop === null) return;
    lop = lop.trim();
    if (lop === "") {
        alert("Lớp không được để trống!");
        return;
    }

    // Thêm vào bảng
    const tbody = document.querySelector("#studentTable tbody");
    const row = tbody.insertRow();

    row.insertCell(0).textContent = mssv;
    row.insertCell(1).textContent = ten;
    row.insertCell(2).textContent = lop;
}