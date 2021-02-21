//never
//起こりえない型を使用する

function error(message: string): never {
    throw new Error(message);
}