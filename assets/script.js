currentDayEl = $("#currentDay");
textAreasClass = $(".description");
buttonEl = $(".btn");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("dddd, Do MMMM");
  currentDayEl.text(rightNow);
}

setInterval(displayTime, 1000);

console.log("#hour-11".childNodes);

// A for loop to identify all of the rows in the html file

for (var i = 9; i < 18; i++) {
  let identifier = "#hour-" + i;
  let identifierEl = $(identifier);
  console.log(identifier);
  console.log(identifierEl);

  // an if function is added to check for each row if the current hour is
  // smaller than, greater than or equal to the row placeholder time, and to
  // then color the row text area accordingly

  if (i < moment().format("HH")) {
    identifierEl.children("textarea").css({ "background-color": "lightgrey" });
  } else if (i > moment().format("HH")) {
    identifierEl.children("textarea").css({ "background-color": "red" });
  } else {
    identifierEl.children("textarea").css({ "background-color": "green" });
  }
}

// create function to save text in text area to local storage
function saveToLocalStorage() {
  let key = $(this).parent().attr("id");
  console.log(key);
  let value = $(this).siblings("textarea").val();
  console.log(value);
  localStorage.setItem(key,value);
}

// create event listener to save text area input into local storage when save
// button on row is clicked

buttonEl.on("click", saveToLocalStorage);
