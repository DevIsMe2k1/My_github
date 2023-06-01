const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // ngăn chặn form gửi đến server và reload trang

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'Nhom02' && password === '123456789') {
    window.location.href = '/smartHome/dashboard.html'; // chuyển hướng đến trang dashboard.html
  } else {
    const errorMessage = document.querySelector('form > p');
    errorMessage.textContent = 'Your account or your password false, Please login again';
    errorMessage.style.color = 'red';
    form.appendChild(errorMessage); // hiển thị thông báo lỗi
  }
});
