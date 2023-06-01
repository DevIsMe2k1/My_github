// Lấy reference tới giá trị của các nút điều khiển trong Firebase
const livingRoomRef = firebase.database().ref('living_room');
const bedRoomRef = firebase.database().ref('bed_room');
const kitchenRoomRef = firebase.database().ref('kitchen_room');

// Lấy reference tới các switch và icon tương ứng
const livingRoomSwitch = document.getElementById('living-room-switch');
const kitchenSwitch = document.getElementById('kitchen-switch');
const bedRoomSwitch = document.getElementById('bed-room-switch');
const livingRoomLights = document.querySelectorAll('.living-room i');
const kitchenLights = document.querySelectorAll('.kitchen i');
const bedRoomLights = document.querySelectorAll('.bed-room i');

// Hàm để cập nhật màu sắc của các đèn
function updateLightColor(lights, value) {
  for (let i = 0; i < lights.length; i++) {
    lights[i].style.color = value === 1 ? 'rgb(234, 208, 9)' : 'grey';
  }
}

// Cập nhật trạng thái ban đầu của các switch và icon
livingRoomRef.once('value', function (snapshot) {
  const livingRoomValue = snapshot.val();
  livingRoomSwitch.checked = livingRoomValue === 1;
  updateLightColor(livingRoomLights, livingRoomValue);
});

kitchenRoomRef.once('value', function (snapshot) {
  const kitchenValue = snapshot.val();
  kitchenSwitch.checked = kitchenValue === 1;
  updateLightColor(kitchenLights, kitchenValue);
});

bedRoomRef.once('value', function (snapshot) {
  const bedRoomValue = snapshot.val();
  bedRoomSwitch.checked = bedRoomValue === 1;
  updateLightColor(bedRoomLights, bedRoomValue);
});

// Lắng nghe sự kiện thay đổi switch và cập nhật giá trị tương ứng trên Firebase
livingRoomSwitch.addEventListener('change', function () {
  const isChecked = livingRoomSwitch.checked ? 1 : 0;
  livingRoomRef.set(isChecked);
  updateLightColor(livingRoomLights, isChecked);
});

kitchenSwitch.addEventListener('change', function () {
  const isChecked = kitchenSwitch.checked ? 1 : 0;
  kitchenRoomRef.set(isChecked);
  updateLightColor(kitchenLights, isChecked);
});

bedRoomSwitch.addEventListener('change', function () {
  const isChecked = bedRoomSwitch.checked ? 1 : 0;
  bedRoomRef.set(isChecked);
  updateLightColor(bedRoomLights, isChecked);
});

// Theo dõi sự thay đổi của giá trị các nút điều khiển trong Firebase
livingRoomRef.on('value', function (snapshot) {
  const livingRoomValue = snapshot.val();
  livingRoomSwitch.checked = livingRoomValue === 1;
  updateLightColor(livingRoomLights, livingRoomValue);
});

kitchenRoomRef.on('value', function (snapshot) {
  const kitchenValue = snapshot.val();
  kitchenSwitch.checked = kitchenValue === 1;
  updateLightColor(kitchenLights, kitchenValue);
});

bedRoomRef.on('value', function (snapshot) {
  const bedRoomValue = snapshot.val();
  bedRoomSwitch.checked = bedRoomValue === 1;
  updateLightColor(bedRoomLights, bedRoomValue);
});
//security check
//bat security
const switchButton = document.getElementById('security-switch');
const shieldCheck = document.querySelector('.bi-shield-fill-check');
const shieldExclamation = document.querySelector('.bi-shield-fill-exclamation');

// Lấy giá trị trạng thái bảo mật từ Firebase
const securityRef = firebase.database().ref('security');
securityRef.on('value', function (snapshot) {
  const securityStatus = snapshot.val();

  // Thiết lập trạng thái ban đầu của switch và biểu tượng phù hợp
  switchButton.checked = securityStatus === 1;
  if (securityStatus === 1) {
    shieldCheck.style.color = '#209f33';
    shieldExclamation.style.color = 'grey';
  } else {
    shieldCheck.style.color = 'grey';
    shieldExclamation.style.color = 'orange';
  }
});

// Theo dõi sự kiện thay đổi của switch và cập nhật giá trị trạng thái bảo mật trên Firebase
switchButton.addEventListener('change', function () {
  const newSecurityStatus = this.checked ? 1 : 0;
  securityRef.set(newSecurityStatus);
});

