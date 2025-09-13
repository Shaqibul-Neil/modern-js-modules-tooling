//Importing Module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'; //imported value is executed first. modules doesn't need use strict

//we can change the name also
import {
  addToCart,
  totalPrice as price,
  totalQuantity as quantity,
} from './shoppingCart.js';

console.log('Importing Module');
//console.log(shippingCost); /variables are scoped only in the module that it was declared. kind of encapsulated

addToCart('breed', 5);
//console.log(totalPrice, totalQuantity); //now we get the access of these values

//after changing the name
console.log(price, quantity);
