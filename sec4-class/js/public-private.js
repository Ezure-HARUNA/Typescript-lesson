"use strict";
var Person = /** @class */ (function () {
    function Person(initName, initAge) {
        this.name = initName;
        this.age = initAge;
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
