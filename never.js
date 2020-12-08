"use strict";
//never型
//決して何も返さない型
//型推論だとvoidになる
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
