// Lấy phần tử hiển thị
const showName = document.getElementById('showName');
const showPwd = document.getElementById('showPwd');
const msg = document.getElementById('message');
const btnBack = document.getElementById('btnBack'); 

// Lấy thông tin đã lưu từ localStorage bên trang đăng ký
const data = localStorage.getItem('demo_user');

// Nếu có dữ liệu thì hiển thị ra
if (data) {
  try {
    const user = JSON.parse(data);
    showName.textContent = user.fullname || '--';
    showPwd.textContent = user.password || '--';
    msg.textContent = 'Dữ liệu được lấy từ thông tin đăng ký trước đó.';
    msg.style.color = 'green';
  } catch (e) {
    msg.textContent = 'Lỗi đọc dữ liệu đăng ký.';
    msg.style.color = 'red';
  }
} else {
  showName.textContent = '--';
  showPwd.textContent = '--';
  msg.textContent = 'Chưa có thông tin đăng ký. Vui lòng quay lại trang đăng ký.';
  msg.style.color = 'orange';
}

// Xử lý khi bấm nút quay về đăng ký
if (btnBack) {
  btnBack.addEventListener('click', () => {
    window.location.href = 'dangky.html'; // Chuyển về trang đăng ký
  });
}
