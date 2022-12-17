currentDayEl = $('#currentDay');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd, Do MMMM');
    currentDayEl.text(rightNow);
  }


  setInterval(displayTime, 1000);