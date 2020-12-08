"use strict";
//関数の戻り値にvoid型を使う方法
//void→何も返さない(undefined)
function sayHello() {
    console.log('Hello!!');
    return;
}
console.log(sayHello());
