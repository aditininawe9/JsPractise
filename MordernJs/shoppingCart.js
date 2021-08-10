//Exporting Module
console.log("Exporting Module");

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quality) {
  cart.push({ product, quality });
  console.log(`${quality} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
