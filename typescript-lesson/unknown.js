"use strict";
//unknown型
//anyより少し厳しい型
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = unknownInput;
//unknownの場合は型を保証してから使わないとエラーになる
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
