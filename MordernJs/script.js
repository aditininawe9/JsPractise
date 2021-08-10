//Importing Module

// import { addToCart, totalPrice as price, totalQuantity } from "./shoppingCart";
// ("./shoppingCart.js");
// addToCart("bread", 5);
// console.log(price, tq);

console.log("Importing module");
import * as ShoppingCart from "./shoppingCart";

ShoppingCart.addToCart("bread", 5);
console.log(ShoppingCart.totalPrice);
