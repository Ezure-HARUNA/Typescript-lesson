"use strict";
var person = {
    name: 'Jack',
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
//↑型推論にすると、booleanやnumberも入れられる
fruits.push('Kiwi');
console.log(fruits);
console.log(person);
var browserType = 'mozilla';
console.log(browserType[browserType.length - 1]);
var a = 'banana';
