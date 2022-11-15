const refrigerator = {
  takeOut: (product) => {
    switch (product) {
      case "cheese": {
        return "gouda";
      }
      case "milk": {
        return "Łaciate";
      }
      default: {
        throw new Error(`there is not ${product}`);
      }
    }
  },
};
// Zadanie 10
// Wywołaj funkcję `lodówka.wyjmij('jakiś produkt')` zabezpieczając się blokiem try...catch,
// wypisując do konsoli zwóconą wartość lub błąd.
// Spróbuj wyjąć z lodówki `ser`, `mleko` i jakiś inny produkt.
try {
  refrigerator.takeOut("cheese");
  console.log(refrigerator.takeOut("cheese"));
} catch (error) {
  console.error("you don't have this");
}
try {
  refrigerator.takeOut("milk");
  console.log(refrigerator.takeOut("milk"));
} catch (error) {
  console.error("you don't have this");
}
try {
  refrigerator.takeOut("yogurt");
  console.log(refrigerator.takeOut("yogurt"));
} catch (error) {
  console.error("you don't have this");
}
