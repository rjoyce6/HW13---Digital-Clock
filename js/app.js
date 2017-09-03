// Create a function to create a clock using the Date Method
function newClock(){
  document.getElementById('display').innerHTML = "";

  var h1 = document.createElement('h1');
  h1.id = 'date';
  var addHere = document.getElementById('display');

  var newDate = new Date();
  var text = document.createTextNode(getTimeAMPM(newDate));
  h1.appendChild(text);
  addHere.appendChild(h1);
}

//call the function every second
setInterval(newClock, 1000);

//-----------------------------------------------------------------
//Add a zero to seconds
function addZero(number){
  if (number< 10 ){
    number = "0" + number;
  }
  return number;
}

//-----------------------------------------------------------------
// Inside the function, create a variable using concatination
// to produce the current time ex. 12:30:45 am.
function getTimeAMPM(newDate) {

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
  var strTime = h + ":" + m + ":" + s + " " + ampm;
  return strTime;
}
