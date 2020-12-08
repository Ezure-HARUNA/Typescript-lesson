//オブジェクトに型を付ける方法


//この書き方か、型推論にする（最初のobject()要らん)
const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}

console.log(person);