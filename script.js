console.log("Add validation!");

const parkingForm = document.querySelector("#container");

parkingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let days = document.querySelector("#days");
  let dayRate = 5;
  function resCost(total, dayRate) {
    let total = days * dayRate;
  }
});
