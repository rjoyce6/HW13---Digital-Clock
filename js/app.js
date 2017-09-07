
//call the function every second using and event listener
document.getElementById('display').addEventListener('onload', getTimeAMPM(), false);
document.getElementById('startTimer').addEventListener('click', setTimer())

//-----------------------------------------------------------------
// Create a function to create a clock using the Date Method
function getTimeAMPM() {

  var newDate = new Date();

  // get hours, minutes, and seconds
  var h = addZero(newDate.getHours());
  var m = addZero(newDate.getMinutes());
  var s = addZero(newDate.getSeconds());
  var ampm;
  //make sure that the hour is display as an am or pm format
  if (h >=12){
    ampm = 'PM';
    h = h%12;
  } else if (h === 0) {
    h = 12;
    ampm = 'AM';
  } else {
    ampm = 'PM';
  }

  // move hands of the clock
  moveHands('hr-hand', 30*h); // each hour is 30 degrees apart
  moveHands('min-hand', 6*m); // each minute is 6 degrees apart
  moveHands('sec-hand', 6*s); // each second is 6 degrees apart

  // Select the element with id="display" to change the displayed time
  document.getElementById('display').textContent = h + ":" + m + ":" + s + " " +ampm;

  // Display time every second
  setTimeout(getTimeAMPM, 1000)
}

//-----------------------------------------------------------------
//Add a zero to seconds
function addZero(number){
  if (number< 10 ){
    number = "0" + number;
  }
  return number;
}

//-----------------------------------------------------------------
//move the hands of the clock
function moveHands(id, val){
  var value = 'rotate(' + val + ', 100, 100)';
  document.getElementById(id).setAttribute('transform', value);
}
