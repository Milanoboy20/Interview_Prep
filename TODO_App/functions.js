"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
//another way of creating a function
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
//another way
const multi = function (num1, num2) {
    return num1 * num2;
};
console.log(multi(2, 3));
//function with optional parameter
function addOptional(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(addOptional(5, 5));
console.log(addOptional(5, 5, 5));
//function with rest parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
//generic functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["Abdul", "Mike", "John"]);
