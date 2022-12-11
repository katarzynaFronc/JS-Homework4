function calculateTip() {
  let billAmt = document.getElementById("bill").value;
  let tipPercent = document.getElementById("tipPercent").value;
  let numOfPeople = document.getElementById("people").value;

  let total = (bill * tipPercent) / numOfPeople;
  total = total.toFixed(2);

  let total = (bill * tipPercent) / numOfPeople + billAmt;
  total = total.toFixed(2);

  document.getElementById("resultAmount").innerText = total;
  document.getElementById("resultTotal").innerText = total;

  let btn = document.getElementById("tipPercent");
  btn.addEventListener("click", function (e) {
    alert("rachunek!");
    e.preventDefault();
  });

  document.getElementById("tipPercent").onclick = function () {
    calculateTip();
  };
}
