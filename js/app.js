
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

  // Select the element with id="display" to change the displayed time
  document.getElementById('display').textContent = h + ":" + m + ":" + s + " " +ampm;

  // Display time every second
  setTimeout(getTimeAMPM, 1000)
}


//-----------------------------------------------------------------
// Create a function to display a timer selected by the user

function setTimer(){
  var timer = document.getElementById('timerValue').value;

  console.log('timer');


}


//-----------------------------------------------------------------
//Add a zero to seconds
function addZero(number){
  if (number< 10 ){
    number = "0" + number;
  }
  return number;
}
