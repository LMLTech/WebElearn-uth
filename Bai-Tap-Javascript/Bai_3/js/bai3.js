const imageElement = document.getElementById('randomImage');
const imageList = [];

for (let i = 1; i <= 10; i++) {
  imageList.push(`images/b${i}.jpg`);
}

let intervalId = null;

function startChanging() {
  if (intervalId) return; // tránh chạy nhiều lần

  intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    imageElement.src = imageList[randomIndex];
  }, 1000);
}

function stopChanging() {
  clearInterval(intervalId);
  intervalId = null;
}
