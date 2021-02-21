//Union型
//!複数の方を入れたい場合

let unionType: number | string = 10;
unionType = 'hello';
unionType.toUpperCase();

//配列にUnion型を用いる場合
let unionTypes: (number | string )[] = [21, 'hello']