// Lấy phần tử DOM
const imageElement = document.getElementById('randomImage');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');

// Danh sách ảnh
const imageList = Array.from({ length: 10 }, (_, i) => `images/b${i + 1}.jpg`);

let intervalId = null;

// Hàm đổi ảnh ngẫu nhiên
const changeImage = () => {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  const newImage = imageList[randomIndex];

  // Hiệu ứng mờ dần
  imageElement.style.opacity = 0;
  setTimeout(() => {
    imageElement.src = newImage;
    imageElement.style.opacity = 1;
  }, 300);
};

// Bắt đầu đổi ảnh
const startChanging = () => {
  if (intervalId) return;

  playBtn.disabled = true;
  stopBtn.disabled = false;

  changeImage();
  intervalId = setInterval(changeImage, 1000);
};

// Dừng đổi ảnh
const stopChanging = () => {
  clearInterval(intervalId);
  intervalId = null;

  playBtn.disabled = false;
  stopBtn.disabled = true;
};

// Gắn sự kiện cho nút
playBtn.addEventListener('click', startChanging);
stopBtn.addEventListener('click', stopChanging);
