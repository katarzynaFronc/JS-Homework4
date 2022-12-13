const billInput = document.querySelector(".inputBill");
const peopleInput = document.querySelector(".inputPeople");
const tipPerPerson = document.getElementById("resultAmount");
const totalPerPerson = document.getElementById("resultTotal");
const tips = document.querySelectorAll(".form--tip");
const tipCustom = document.querySelector(".customTip");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", tipInputFun);

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.0;

function billInputFun() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}

function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);
  calculateTip();
}

function tipInputFun() {
  tipValue = parseFloat(tipCustom.value / 100);

  calculateTip();
}

function handleClick(event) {
  tips.forEach(function (val) {
    if (event.target.innerHTML === val.innerHTML) {
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}
