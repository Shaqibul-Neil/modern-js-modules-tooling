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

//import * as ShoppingCart from './shoppingCart.js'; // * means everything-->importing everything into an object. capital case like class-->shoppingCart.js is exporting a public api just like a class

console.log('Importing Module');
//console.log(shippingCost); /variables are scoped only in the module that it was declared. kind of encapsulated
//console.log(ShoppingCart);

//ShoppingCart.addToCart('breed', 5);
//console.log(ShoppingCart.totalPrice);

//importing default-->when we'll import it we can give it any name we want
// import addDefault from './shoppingCart.js';
// addDefault('flour', 15);

//we can add named export and default export at the same but in practice never do this
// import addDefault, {
//   addToCart,
//   totalPrice,
//   totalQuantity,
// } from './shoppingCart.js';
// addDefault('flour', 15);
// console.log(totalPrice);

//importing default-->when we'll import it we can give it any name we want
// import addDefault from './shoppingCart.js';
// addDefault('flour', 15);

//Checking live connection
import addDefault, { cart } from './shoppingCart.js';
addDefault('flour', 15);
addDefault('bread', 1);
addDefault('rice', 5);
console.log(cart); //cart updated according to the function Real TIME

// Top-Level await (ES2022)
//await works without async only if the type is module but prb is it blocks the rest of the code
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('5');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost); //it returns a promise bcz as we know calling an async function alwz returns a promise
//workaround not very clean
lastPost.then(res => console.log(res));

const lastPost2 = await getLastPost();
console.log('lastPost2', lastPost2);
