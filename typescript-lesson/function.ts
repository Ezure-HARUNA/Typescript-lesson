//!➀関数に型を付ける

//戻り値の型もi一応付けておく
function add(num1: number, num2: number): number  {
    return num1 + num2
}

//!➁関数を使って、特定の関数のみを代入できる関数を作る

//型注釈での書き方
const anotherAdd1: (n1: number, n2: number)  => number = function (num1: number, num2: number): number {
    return num1 + num2
}

const doubleNumber = (number: number) : number=> number * 2;
const doubleNumber2: (num: number) =>  number = number => number * 2;
