 //get time
 function clock() {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";
    //set the time period (AM/PM)
    if(hour >= 12) {
      period = "PM";
    }
  
    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
  }
  var updateClock = setInterval(clock, 1000);
  
  //get date
  var today=new Date();
  const dayNumber = today.getDate();
  const year = today.getFullYear();
  const dayName = today.toLocaleString("default",{weekday:"long"});
  const monthName =today.toLocaleString("default",{month:"short"});
  
  document.querySelector(".month-name").innerHTML = monthName;
  document.querySelector(".day-name").innerHTML = dayName;
  document.querySelector(".day-number").innerHTML=dayNumber;
  document.querySelector(".year").innerHTML=year;
  