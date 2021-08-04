"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: "Wang",
  location: "Italy, Mumbai, Jbp, Bhp",
  categories: ["Italian", "Veg", "Non-veg", "Organic"],
  starterMenu: ["Garlic", "desert", "capsicum", "Bread"],
  mainMenu: ["Pizza", "Burger", "Pasta"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { openingHours: hours, categories: tags } = restaurant;
// console.log(hours, tags);

//Spread Operator
// const arr = [7, 8, 9, 10, 11, 12];
// const newarr = [1, 2, ...arr];
// console.log(newarr);
// const number = [...arr, 22];
// console.log(number);

// const str = "Aditi";
// const letters = [...str, " ", "S."];
// console.log(letters);

//Rest Operator
// const arra = [1, 2, ...[3, 4]];

// const [a, b, ...array] = [1, 2, 3, 4, 5];
// console.log(a, b, array);

//Mutating Variables
// let a = 111;
// let b = 999;

// const obj = { a: 12, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
//destructuring array

// const arr = [2, 3, 4];
// const a = arr[0];
// console.log(a);

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// [first, second] = [second.main];

// console.log(first, second);
// console.log(restaurant.order(2, 0));

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);

// function sumOne(a, b, c) {
//   return a + b + c;
// }

// var myA = [6, 7, 8];
// console.log(sumOne(...myA)); //Spread Operator

// function sumTwo(a, b, ...args) {
//   console.log(args);
//   let multi = a * b;
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return [sum, multi];
// }
// console.log(sumTwo(1, 2, 3, 5));

const names = ["Youtube", "facebook", "instagram", "netflix"];

// for (const n of names) {
//   console.log(n);
// }

// const symbols = {
//   yt: "Youtube",
//   ig: "instagram",
//   fb: "facebook",
// };
// for (const n in symbols) {
//   console.log(`key is ${n} and value is: ${symbols}`);
// }

// let office = {
//   aditi: "ninawe",
//   ankita: "sony",
//   nikita: "gupta",
//   riya: "saraf",
// };
// let keys = Object.keys(office);
// console.log("Keys", keys);
// let vals = Object.values(office);
// console.log("vals", vals);
// let entries = Object.entries(office);
// console.log("entries", entries);
// for (const x of entries) {
//   console.log(x);
// }

// const orderSet = new Set(["Pasta", "Pizza", "Maggie", "Pasta"]);

// const food = [...new Set(orderSet)];
// console.log(food);
// console.log(orderSet);

// console.log(new Set("Aditi"));

// console.log(orderSet.size);

// const rest = new Map();
// rest.set("name", "Wang");
// rest.set(1, "Jabalpur , MP");
// console.log(rest.set(2, "Bhopal"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "we are closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// rest.delete(1);

// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest);
// console.log(rest.size);

// const question = new Map([
//   ["question", "What is the best programming language"],
//   [1, "C"],
//   [2, "Python"],
//   [3, "JS"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try Again"],
// ]);
// console.log(question);
//Conver object to map
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Anser is ${key} : ${value}`);
// }
// const answer = Number(prompt("Your answer"));
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));

//Convert map into array
//console.log([...question]);

const plane = "A320";
const airline = "Tap air Portugal";

console.log(airline.length);
console.log(airline.indexOf("r"));
console.log(airline.slice(4, 7));
console.log(plane[0]);
console.log(plane[1]);

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome onboard");
  }
};

checkBaggage(`I have a laptop, some Food and a pocket knife`);
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and gun");

console.log(`a+nice+string`.split("+"));
console.log("Aditi Ninawe".split(" "));

const firstName = "aditi";
const lastName = "ninawe";
const newName = ["Mis.", firstName.toUpperCase(), lastName.toUpperCase()].join(
  " "
);
console.log(newName);
