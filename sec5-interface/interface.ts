//interface
//→タイプエイリアスとほとんど変わらん
//!違いは「interfaceはオブジェクトのみを扱う

//!interfaceで関数の方を表現する方法

interface addFunc {
    (num1: number, num2: number): number;
} 
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

//! ?を付けることで「あってもなくてもいいよ」


//extendsをinterfaceに使う方法
interface Nameable {
    name: string;
    //あってもなくてもいい
    nickName?: string;
}

const nameable: Nameable = { 
    name: 'Quill', 
    nickName: 'Quilla'
}
interface Human extends Nameable {
    age: number;
    greeting: (message: string): void;
}




//classに対してintercaceを適用する
//implementsを使うと、複数のinterfaceを実装できる
class Developer implements Human, Nameable {
    constructor(public name: string, public age: number, public experience: number) 
    greeting(message: string = 'hello') {
        console.log('Hello!')
    }
}

const tmpDeveloper = {
    name: 'Quill', 
    age: 38,
    experience: 3,
    greeting(message: string) {
        console.log('Hello!')
    }
}

const user: Human = tmpDeveloper;
//developerにはreadonlyでなくpublicがついてるので変更が可能
let developer = new Developer('Quill', 38, 3)
console.log(user.name);
