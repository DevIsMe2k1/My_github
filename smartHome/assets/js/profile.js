// cập nhật thoi gian
const title = document.querySelector('.title');
const greeting = document.querySelector('h1');
title.appendChild(greeting);

function getGreeting() {
  const now = new Date();
  const hour = now.getHours();
  
  if (hour >= 5 && hour < 12) {
    greeting.textContent = 'Hello, Good morning';
  } else if (hour >= 12 && hour < 18) {
    greeting.textContent = 'Hello, Good afternoon';
  } else {
    greeting.textContent = 'Hello, Good evening';
  }
}

getGreeting(); // hiển thị lời chào ban đầu

// cập nhật lời chào sau mỗi 30 phút

//profile
setInterval(function() {
  getGreeting();
}, 30 * 60 * 1000);

$(document).ready(function() {
  $('.user').click(function(e) {
    $('.user-profile').toggle();
    e.stopPropagation();
  });
  $(document).click(function() {
    $('.user-profile').hide();
  });
});