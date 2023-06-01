// Lấy reference tới giá trị của các nút điều khiển trong Firebase
const livingRoomRe = firebase.database().ref('living_room');
const bedRoomRe = firebase.database().ref('bed_room');
const kitchenRoomRe = firebase.database().ref('kitchen_room');

// Lấy giá trị đã lưu trên Local Storage để thiết lập cho button khi tải lại trang
const livingRoomButtonText = localStorage.getItem('livingRoomButtonText') || 'Hẹn giờ bật tắt';
const kitchenButtonText = localStorage.getItem('kitchenButtonText') || 'Hẹn giờ bật tắt';
const bedRoomButtonText = localStorage.getItem('bedRoomButtonText') || 'Hẹn giờ bật tắt';
const allButtonText = localStorage.getItem('allButtonText') || 'Hẹn giờ bật tắt';

const buttonForLivingRoom = document.querySelector('#dropdownMenuButton-living-room');
const buttonForKitchen = document.querySelector('#dropdownMenuButton-kitchen');
const buttonForBedRoom = document.querySelector('#dropdownMenuButton-bed-room');
const buttonForAll = document.querySelector('#dropdownMenuButton-for-all');

// Thiết lập nội dung ban đầu cho các button
buttonForLivingRoom.textContent = livingRoomButtonText;
buttonForKitchen.textContent = kitchenButtonText;
buttonForBedRoom.textContent = bedRoomButtonText;
buttonForAll.textContent = allButtonText;

// Lưu nội dung của button vào Local Storage khi thay đổi
function saveButtonContentToLocalStorage(buttonId, content) {
  localStorage.setItem(buttonId, content);
}

// Hen gio bat tắt
const dropdownItems1 = document.querySelectorAll('.dropdown-item1');
const dropdownItems2 = document.querySelectorAll('.dropdown-item2');
const dropdownItems3 = document.querySelectorAll('.dropdown-item3');
const dropdownItems4 = document.querySelectorAll('.dropdown-item4');

dropdownItems1.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedTime = item.textContent.trim();
    livingRoomRe.on('value', (snapshot) => {
      const value = snapshot.val();
      if (value === 1) {
        buttonForLivingRoom.textContent = 'Tắt sau ' + selectedTime;
      } else {
        buttonForLivingRoom.textContent = 'Bật sau ' + selectedTime;
      }
      saveButtonContentToLocalStorage('livingRoomButtonText', buttonForLivingRoom.textContent);
    });
  });
});
dropdownItems2.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedTime = item.textContent.trim();
    kitchenRoomRe.on('value', (snapshot) => {
      const value = snapshot.val();
      if (value === 1) {
        buttonForKitchen.textContent = 'Tắt sau ' + selectedTime;
      } else {
        buttonForKitchen.textContent = 'Bật sau ' + selectedTime;
      }
      saveButtonContentToLocalStorage('kitchenButtonText', buttonForKitchen.textContent);
    });
  });
});
dropdownItems3.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedTime = item.textContent.trim();
    bedRoomRe.on('value', (snapshot) => {
      const value = snapshot.val();
      if (value === 1) {
        buttonForBedRoom.textContent = 'Tắt sau ' + selectedTime;
      } else {
        buttonForBedRoom.textContent = 'Bật sau ' + selectedTime;
      }
      saveButtonContentToLocalStorage('bedRoomButtonText', buttonForBedRoom.textContent);
    });
  });
});
dropdownItems4.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedTime = item.textContent.trim();
    livingRoomRe.once('value', (snapshot) => {
      const value1 = snapshot.val();
      kitchenRoomRef.on('value', (snapshot) => {
        const value2 = snapshot.val();
        bedRoomRef.once('value', (snapshot) => {
          const value3 = snapshot.val();
          if (value1 === 1 && value2 === 1 && value3 === 1) {
            buttonForAll.textContent = 'Tắt sau ' + selectedTime;
          } else {
            buttonForAll.textContent = 'Bật sau ' + selectedTime;
          }
          saveButtonContentToLocalStorage('allButtonText', buttonForAll.textContent);
        });
      });
    });
  });
});
