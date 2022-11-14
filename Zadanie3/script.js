function evenNumbersOnly(array) {
  let myArray = [];
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] % 2 === 0) {
      myArray[j] = array[i];
      j++;
    }
  }
  console.log(myArray);
}

evenNumbersOnly([1, 2, 3, 4, 5, 6, 7]);
evenNumbersOnly(["Czasem", 12, "Słońce", 3, "czasem", 600, "deszcz"]);
evenNumbersOnly([{}, {}, [], [], "abc", 2]);
evenNumbersOnly(["a", null, true, "kot", undefined, {}, []]);
