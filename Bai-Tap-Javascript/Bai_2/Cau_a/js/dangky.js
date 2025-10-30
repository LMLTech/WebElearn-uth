// Xử lý đăng ký và lưu dữ liệu vào localStorage
const btn = document.getElementById('btnRegister');
const full = document.getElementById('fullname');
const pwd = document.getElementById('pwd');
const msg = document.getElementById('message');

btn.addEventListener('click', function () {
  const name = full.value.trim();
  const pass = pwd.value;

  if (!name) {
    msg.textContent = 'Vui lòng nhập họ tên.';
    full.focus();
    return;
  }

  if (!pass) {
    msg.textContent = 'Vui lòng nhập mật khẩu.';
    pwd.focus();
    return;
  }

  const user = { fullname: name, password: pass };
  localStorage.setItem('demo_user', JSON.stringify(user));

  msg.textContent = 'Đăng ký thành công! Đang chuyển sang trang đăng nhập...';

  setTimeout(() => {
    window.location.href = 'dangnhap.html';
  }, 700);
});

pwd.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') btn.click();
});
