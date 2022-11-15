const roboczy1 = "poniedziałek";
const roboczy2 = "wtorek";
const roboczy3 = "środa";
const roboczy4 = "czwartek";
const roboczy5 = "piątek";
const weekend1 = "sobota";
const weekend2 = "niedziela";
let pobudka = weekend1;

switch (pobudka) {
  case "poniedziałek":
  case "wtorek":
  case "środa":
  case "czwartek":
  case "piątek": {
    console.log("time alert 5:30");
    break;
  }
  case "sobota":
  case "niedziela": {
    console.log("time alert 7:00");
    break;
  }
}
