//initNameなど、初期化を省略する方法
class Person {
    constructor(public name: string, private age: number) {
    }
    incrementAge() {
        this.age += 1;
    } 
    greeting(this: Person) {
        console.log(`Hello!! My name is ${this.name}. I am ${this.age} years old.`)
    }
}
let person2: Person;
const quill = new Person('Quill', 38);
quill.incrementAge();
console.log(quill.age);

quill.greeting()

// const anotherQuill = {
//     //この行がないと
//     name: 'another',
//     greeting: quill.greeting
// }

// anotherQuill.greeting()

