console.log("Add validation!");

const parkingForm = document.querySelector("#container");

parkingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let days = document.querySelector("#days").value;
  let startDay = document.querySelector("#start-date").value;
  console.log(startDay);
  let weekDayRate = 5;
  let weekEndRate = 7;
  let cost = resCost(weekDayRate, weekEndRate, days, startDay);
  console.log(cost);
});

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
