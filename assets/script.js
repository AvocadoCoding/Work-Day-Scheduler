currentDayEl = $('#currentDay');
textAreasClass = $('.description')

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd, Do MMMM');
    currentDayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);

  console.log(('#hour-11').childNodes)

  // A for loop to identify all of the rows in the html file

  for(var i=9; i<18; i++){
    var identifier = '#hour-' + i;
    var identifierEl= $(identifier);
    console.log(identifier);
    console.log(identifierEl);
    
    // an if function is added to check for each row if the current hour is 
    // smaller than, greater than or equal to the row placeholder time, and to
    // then color the row text area accordingly

    if(i < (moment().format('HH'))){
      identifierEl.children("textarea").css({"background-color":"lightgrey"});
    } else if(i > (moment().format('HH'))){
      identifierEl.children("textarea").css({"background-color":"red"});
    } else{
      identifierEl.children("textarea").css({"background-color":"green"});
    }

  }
