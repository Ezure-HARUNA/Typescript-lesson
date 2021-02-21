//unknown型
//Anyよりすこし厳しい型

let unknownInput: unknown;
let anyInput: any;
let text: string;

unknownInput = 'hello';
anyInput = 21;
unknownInput = true;
text = unknownInput;

if (typeof unknownInput === 'string') {
    text = unknownInput;
}