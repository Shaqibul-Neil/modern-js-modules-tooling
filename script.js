//Importing Module
import { addToCart } from './shoppingCart.js'; //imported value is executed first. modules doesn't need use strict
console.log('Importing Module');
//console.log(shippingCost); /variables are scoped only in the module that it was declared. kind of encapsulated

addToCart('breed', 5);
