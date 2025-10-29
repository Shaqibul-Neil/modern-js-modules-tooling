//Importing Module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'; //imported value is executed first. modules doesn't need use strict

import cloneDeep from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/cloneDeep.js';

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
// import addDefault, { cart } from './shoppingCart.js';
// addDefault('flour', 15);
// addDefault('bread', 1);
// addDefault('rice', 5);
// console.log(cart); //cart updated according to the function Real TIME

// Top-Level await (ES2022)
//await works without async only if the type is module but prb is it blocks the rest of the code
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('5');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost); //it returns a promise bcz as we know calling an async function alwz returns a promise
//workaround not very clean
// lastPost.then(res => console.log(res));

// const lastPost2 = await getLastPost();
// console.log('lastPost2', lastPost2);

//previous before es6 --closures
// const ShoppingCart = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = (product, quantity) => {
//     cart.push({ product, quantity });
//     console.log(`${product} ${quantity} added to the cart`);
//   };
//   return { addToCart, cart, totalPrice, totalQuantity };
// })();

// ShoppingCart.addToCart('apple', 4);

// console.log(ShoppingCart.shippingCost);

const state = {
  cart: [
    { product: 'pizza', quantity: 5 },
    { product: 'bread', quantity: 15 },
  ],
  user: { loggedIn: true },
};
//to create a copy of obj we use obj.assign
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
const anotherWayClone = structuredClone(state);
console.log(stateDeepClone);
console.log(stateClone);
console.log(anotherWayClone);
state.user.loggedIn = false;
