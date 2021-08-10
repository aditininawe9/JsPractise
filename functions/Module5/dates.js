const account1 = {
  owner: "Aditi Ninawe",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  intrestRate: 1.2,
  pin: 1111,

  movementsDate: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "py-PT",
};

const account2 = {
  owner: "Riya Saraf",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  intrestRate: 1.5,
  pin: 2222,

  movementsDate: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:36.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};
const accounts = [account1, account2];

console.log(0.1 + 0.2);

//Conversion
console.log(Number("23"));
console.log(+"23");

//Parsing
console.log(Number.parseInt("30px"));
console.log(Number.parseInt("e23"));

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

console.log(Math.max(5, 18, "23px", 11, 2));

console.log(Math.trunc(Math.random() * 6) + 1);

console.log((2.735).toFixed(2));

console.log(2 ** 53 - 1);

//BigInt
console.log(BigInt(1234567894561230231456));

//Dates

//setTimeout

const ingredients = ["olives", "spinach"];
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log("Waiting");

//setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
const labelTimer = document.querySelector(".timer");
const startLogoutTimer = function () {
  //Set time to 5 minutes
  let time = 100;
  //Call the timer every second
  setInterval(function () {
    //In each call, print the remainig time to UI
    labelTimer.textContent = time;

    //Decrease 1s
    time--;
    //When 0 seconds, stop timer and logout user
  }, 1000);
};
startLogoutTimer();
