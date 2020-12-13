"use strict";
//interface
//→タイプエイリアスとほとんど変わらん
//!違いは「interfaceはオブジェクトのみを扱う
var addFunc;
addFunc = function (n1, n2) {
    return n1 + n2;
};
var nameable = {
    name: 'Quill',
    nickName: 'Quilla'
};
//classに対してintercaceを適用する
//implementsを使うと、複数のinterfaceを実装できる
var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.prototype.greeting = function (message) {
        if (message === void 0) { message = 'hello'; }
        console.log('Hello!');
    };
    return Developer;
}());
var tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting: function (message) {
        console.log('Hello!');
    }
};
var user = tmpDeveloper;
//developerにはreadonlyでなくpublicがついてるので変更が可能
var developer = new Developer('Quill', 38, 3);
console.log(user.name);
