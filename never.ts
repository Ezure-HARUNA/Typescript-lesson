//never型
//決して何も返さない型

//型推論だとvoidになる
function error(message: string): never {
    throw new Error(message);
}
console.log(error('This is an error'))