//Literal型
//特定の決まった値のみを扱う型


const apple: 'apple' = 'apple'

//×
let apples: 'apple' = 'hello'

//どういうときに使う？
//Enumのように使う

// let clothSize: 'small' | 'medium' | 'large' = 'large'

const cloth: {
    color: string;
    size: 'small' | 'medium' | 'large' 
} = {
    color: 'white',
    size: 'medium'
}
cloth.size = 'small'