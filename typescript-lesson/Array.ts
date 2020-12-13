const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}

const fruits: string[] = ['Apple', 'Banana', 'Grape']
//↑型推論にすると、booleanやnumberも入れられる
fruits.push('Kiwi')
console.log(fruits)

console.log(person);

let browserType = 'mozilla';
console.log(browserType[browserType.length-1];)

let a = 'banana'