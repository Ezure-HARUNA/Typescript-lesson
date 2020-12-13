
//順にstring, number, booleanにしたい時
// →Tuple型が使える
const book: [string, number, boolean]  = ['business', 1500, false];
book[1] = 700
//pushはできる
book.push(21)
console.log(book[3])