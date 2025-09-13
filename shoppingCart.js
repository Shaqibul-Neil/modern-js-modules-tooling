//Exporting Module
console.log('Exporting Module');

const shippingCost = 10; //variables are scoped only in this module
export const cart = []; //checking the live connection

//console.log(shippingCost);

//creating a named export--> func defined here exported and imported in script.js and then called there
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

//export always needs to be top level code, no block or function
/*
if (true) { //---> it wont work here
  export const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${product} ${quantity} added to the cart`);
  };
}
*/
//Named Export: exporting multiple things using named export
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity }; //curly brace must

//we can change the name here also
//export { totalPrice, totalQuantity as qT };

//Default Exports:
//if we want to export the same add to cart function we'll just need the function body not the variable name and when we'll import it we can give it any name we want
export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};
