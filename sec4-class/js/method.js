"use strict";
var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    Person.prototype.greeting = function () {
        console.log("Hello!! My name is " + this.name);
    };
    return Person;
}());
var person2;
var quill = new Person('Quill');
quill.greeting();
var anotherQuill = {
    //この行がないと
    name: 'another',
    greeting: quill.greeting
};
anotherQuill.greeting();
