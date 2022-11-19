// Napisz funkcję, która przyjmie inną funkcję jako parametr i zwróci funkcję która wywołuje poprzednią za pierwszym razem, a za kolejmym wywołaniem wypisuje
// na konsoli 'blokada!'

function createFunctionThatRunsOnlyOnce(originalFunction) {
  let counter = 0;
  return function () {
    if (counter === 0) {
      originalFunction();
    } else {
      console.log("blokada!");
    }
    counter++;
  };
}

function simpleFunction() {
  console.log("I do my job");
}

const limitedFunction = createFunctionThatRunsOnlyOnce(simpleFunction); //note, there is no simpleFunction() but simpleFunction

limitedFunction(); // I do my job
limitedFunction(); // blokada!
limitedFunction(); // blokada!
limitedFunction(); // blokada!
