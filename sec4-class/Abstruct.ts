//継承
//TeacherにPersonを引き継ぐ

//abstruct（抽象クラス）
//→継承のための
//abstractはinstanseを生成できない（newとかできない）
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
    constructor(name: string, age: number, private _subject: string) {
        super(name, age)
    }
    // greeting(this: Person) {
    //     console.log(`Hello!! My name is ${this.name}. I am ${this.age} years old.
    //     I teach ${this.subject}.`)
    // }
}

const teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting()

