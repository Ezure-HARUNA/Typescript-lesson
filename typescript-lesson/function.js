"use strict";
//!➀関数に型を付ける
//戻り値の型もi一応付けておく
function add(num1, num2) {
    return num1 + num2;
}
//!➁関数を使って、特定の関数のみを代入できる関数を作る
//型注釈での書き方
var anotherAdd1 = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (number) { return number * 2; };
var doubleNumber2 = function (number) { return number * 2; };
