//Importing Module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'; //imported value is executed first. modules doesn't need use strict

//we can change the name also
// import {
//   addToCart,
//   totalPrice as price,
//   qT as quantity, //totalQuantity->qT->quantity
// } from './shoppingCart.js'from './shoppingCart.js';

//addToCart('breed', 5);
//console.log(totalPrice, totalQuantity); //now we get the access of these values

//after changing the name
//console.log(price, quantity);

//importing all the exports at the same time

import * as ShoppingCart from './shoppingCart.js'; // * means everything-->importing everything into an object. capital case like class

console.log('Importing Module');
//console.log(shippingCost); /variables are scoped only in the module that it was declared. kind of encapsulated
console.log(ShoppingCart);
