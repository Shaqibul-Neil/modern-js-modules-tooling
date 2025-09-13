//Exporting Module
console.log('Exporting Module');

const shippingCost = 10; //variables are scoped only in this module
const cart = [];
console.log(shippingCost);

//creating a named export--> func defined here exported and imported in script.js and then called there
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to the cart`);
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
