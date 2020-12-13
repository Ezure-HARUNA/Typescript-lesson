"use strict";
//initNameなど、初期化を省略する方法
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello!! My name is " + this.name + ". I am " + this.age + " years old.");
    };
    return Person;
}());
var person2;
var quill = new Person('Quill', 38);
quill.incrementAge();
console.log(quill.age);
quill.greeting();
// const anotherQuill = {
//     //この行がないと
//     name: 'another',
//     greeting: quill.greeting
// }
// anotherQuill.greeting()
