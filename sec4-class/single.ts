//!privateをconstructorにつける
//シングルトンパターン(デザインパターン)
//→インスタンスをclassの中でしか使えない
//staticを使えばインスタンス使える

abstract class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if(age > 17) return true;
        return false
    }
    //protected引継ぎ先では使える
    constructor(public name: string, protected age: number) {
    }
    incrementAge() {
        this.age += 1;
    } 
    greeting(this: Person) {
        console.log(`Hello!! My name is ${this.name}. I am ${this.age} years old.`)
        this.explainJob()
    }
    abstract explainJob(): void;

}

console.log(Person.species)
console.log(Person.isAdult(38));


// const anotherQuill = {
//     //この行がないと
//     name: 'another',
//     greeting: quill.greeting
// }

// anotherQuill.greeting()

class Teacher extends Person {
    //!
    private static instance: Teacher;
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}.`)
    }
    get subject() {
        if(!this._subject) {
            throw new Error('There is no subjects.');
        }
        return this._subject;
    } 
    set  subject(value) {
        this._subject= value;
        if (!value) {
            throw new Error('There is no subject.')
        }
    }
    private constructor(name: string, age: number, private _subject: string) {
        super(name, age)
    }
    static getInstance() {
        if(Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
    // greeting(this: Person) {
    //     console.log(`Hello!! My name is ${this.name}. I am ${this.age} years old.
    //     I teach ${this.subject}.`)
    // }
}

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);

teacher.greeting()

