console.log("Add validation!");

const parkingForm = document.querySelector("#container");

parkingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // let newElement = document.createElement("#total");

  let days = document.querySelector("#days").value;
  let startDay = document.querySelector("#start-date").value;
  console.log(startDay);
  const cardNumber = document.querySelector("#credit-card").value;
  console.log(`CARDVALID: ${validateCardNumber(cardNumber)}`);
  if (validateCardNumber(cardNumber) == false) {
    document.querySelector("#credit-card").classList.remove("valid");
    document.querySelector("#credit-card").classList.add("invalid");
    // document
    //   .querySelector("#credit-card")
    //   .setCustomValidity("Please enter valid credit card number");
    // document.querySelector("#credit-card").reportValidity();
    return;

    // this is where cycle should continue with empty container
    // document.addEventListener("change", function(e)
    //   e.
  } else {
    document.querySelector("#credit-card").classList.remove("invalid");
    document.querySelector("#credit-card").classList.add("valid");
    // throws credit card error message
    if (validateCardNumber(cardNumber) == false) {
      document.querySelector("#credit-card").classList.add("wrong");
      document
        .querySelector("#credit-card")
        .setCustomValidity("Please enter valid credit card number");
      document.querySelector("#credit-card").reportValidity();
      return;
    } else {
      document.querySelector("#credit-card").classList.remove("wrong");
      document.querySelector("#credit-card").setCustomValidity("");
      let weekDayRate = 5;
      let weekEndRate = 7;
      let cost = resCost(weekDayRate, weekEndRate, days, startDay);
      console.log(cost);
      approve();
    }
  }
  // if (yearMonth > newExp) {

  // }
});

//  Number of days function
function resCost(weekDayRate, weekEndRate, days, startDay) {
  const startDate = new Date(startDay);
  let start = startDate.getDay();
  console.log(start);
  let dayArray = [];
  dayArray.push(start);
  let currentDay = start;
  while (dayArray.length < days) {
    currentDay++;
    dayArray.push(currentDay % 7);
  }
  console.log(dayArray);
  let weekDays = 0;
  let weekEnds = 0;
  for (let day of dayArray) {
    if (day === 0 || day === 6) {
      weekEnds++;
    } else {
      weekDays++;
    }
  }
  let total = weekDays * weekDayRate + weekEnds * weekEndRate;
  return total;
}

//  Credit Card Validation code copy via assignment

function validateCardNumber(number) {
  var regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(number)) return false;

  return luhnCheck(number);
}

function luhnCheck(val) {
  var sum = 0;
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 == 0;
}

// date arrangement information
let exp = document.querySelector("#expiration").value;
let newExp = +(exp.slice(3) + exp.slice(0, 2));
function approve() {
  let today = new Date();
  let month = today.getMonth() + 1;
  let shortYear = today.getFullYear() % 100;
  console.log(today);
  console.log(month);
  console.log(shortYear);
  let yearMonth = "shortYear" + "month";
}
