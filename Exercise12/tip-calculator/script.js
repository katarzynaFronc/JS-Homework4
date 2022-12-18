const billInput = document.querySelector(".billInput");
const peopleInput = document.querySelector(".peopleInput");
const tipPerPerson = document.getElementById("tipAmount");
const totalPerPerson = document.getElementById("totalAmount");
const tips = document.querySelectorAll(".tips--button");
const tipCustom = document.querySelector(".tips--custom");

const resetButton = document.querySelector(".resetButton");

const error = document.querySelector(".error");

// -----default state of reset button----- //

resetButton.disabled = true;

// --------------------------------------- //

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", tipInputFun);
resetButton.addEventListener("click", reset);

tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.0;

// --------tip calculator------- //

function billInputFun() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}
function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);
  calculateTip();

  if (peopleValue < 1) {
    error.style.display = "flex";
    peopleInput.style.border = "solid 2px rgb(187, 45, 45)";
  } else {
    error.style.display = "none";
    peopleInput.style.border = "solid 2px var(--color-neutral-very-light-grayish-cyan)";
    calculateTip();
  }
}

function tipInputFun() {
  tipValue = parseFloat(tipCustom.value / 100);
}

function handleClick(event) {
  tips.forEach(function (value) {
    if (event.target.innerHTML === value.innerHTML) {
      tipValue = parseFloat(value.innerHTML) / 100;
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let totalAmount = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + totalAmount.toFixed(2);
  }
}

// ------------------------------ //

// -----buttonState function----- //

billInput.addEventListener("keyup", buttonState);
peopleInput.addEventListener("keyup", buttonState);
tipCustom.addEventListener("keyup", buttonState);

function buttonState() {
  if (billInput.value === "" && peopleInput.value === "" && tipCustom.value === "") {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
    resetButton.style.opacity = "1";
    resetButton.style.cursor = "pointer";
  }
}

// ---------------------------- //

// -----reset function----- //

function reset() {
  billInput.value = "";
  peopleInput.value = "";
  tipCustom.value = "";
  tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
}

// ----------------------- //
