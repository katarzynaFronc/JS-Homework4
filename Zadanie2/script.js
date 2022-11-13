function pattern(sign, times) {
  let myArray = [times];
  for (i = 0; i < times && i < 10; i++) {
    myArray[i] = sign;
  }
  return myArray.join("-");
}
console.log(pattern("$", 5));
console.log(pattern("$", 17));
console.log(pattern("@", 3));
