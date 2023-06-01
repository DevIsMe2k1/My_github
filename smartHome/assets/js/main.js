
//gauge humi
const gaugeHumElement = document.querySelector(".gauge-hum");
const needleHumElement = document.querySelector(".gauge-hum__needle");
function setGaugeHumValue(gauge, needle, value) {
  if (value < 0 || value > 100) {
    return;
  }

  const fillHumElement = gauge.querySelector(".gauge-hum__fill");
  const fillHumRotation = value / 100;
  fillHumElement.style.transform = `rotate(${fillHumRotation}turn)`;
  gauge.querySelector(".gauge-hum__cover").textContent = `${Math.round(
    value
  )}%`;

  const needleHumRotation = fillHumRotation * 180 -90;
  needle.style.transform = `rotate(${needleHumRotation}deg)`;
}

setGaugeHumValue(gaugeHumElement, needleHumElement, 50);

//gauge temp
const gaugeTempElement = document.querySelector(".gauge-temp");
const needleTempElement = document.querySelector(".gauge-temp__needle");

function setGaugeTempValue(gauge, needle, value) {
  if (value < 0 || value > 50) {
    return;
  }

  const fillTempElement = gauge.querySelector(".gauge-temp__fill");
  const fillTempRotation = value / 50;
  fillTempElement.style.transform = `rotate(${fillTempRotation}turn)`;
  gauge.querySelector(".gauge-temp__cover").textContent = `${Math.round(
    value
  )}°C`;

  const needleTempRotation = fillTempRotation * 180 -90;
  needle.style.transform = `rotate(${needleTempRotation}deg)`;
}

setGaugeTempValue(gaugeTempElement, needleTempElement, 20);

// update temp and hum


// Reference to the temperature value in Firebase Realtime Database
var tempRef = firebase.database().ref('Temperature');

// Listen for changes to the temperature value
tempRef.on('value', function(snapshot) {
  // Get the temperature value from the snapshot
  var tempValue = snapshot.val();
  // Update the temperature value on the web page
  document.getElementById('temp-value').innerHTML = tempValue + '°C';
  setGaugeTempValue(gaugeTempElement, needleTempElement, tempValue);
});

// Reference to the humidity value in Firebase Realtime Database
var humRef = firebase.database().ref('Humidity');

// Listen for changes to the humidity value
humRef.on('value', function(snapshot) {
  // Get the humidity value from the snapshot
  var humValue = snapshot.val();

  // Update the humidity value on the web page
  document.getElementById('hum-value').innerHTML = humValue + '%';
  setGaugeHumValue(gaugeHumElement, needleHumElement, humValue);
});
// Reference to the Energy value in Firebase Realtime Database
var EnergyRef = firebase.database().ref('Energy');

// Listen for changes to the Energy value
EnergyRef.on('value', function(snapshot) {
  // Get the Energy value from the snapshot
  var EnValue = snapshot.val();
  // Update the Energy value on the web page
  document.getElementById('en-value').innerHTML = EnValue + ' mW/s';
});


