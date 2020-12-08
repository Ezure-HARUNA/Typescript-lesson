//Literal型
//特定の決まった値のみを受ける

const apple: 'apple' = 'apple'

let clothSize: 'small' | 'medium' | 'large' = 'small'
const cloth: {
    color: string;
    size: 'small' | 'medium' | 'large';
} = {
    color: 'white',
    size: clothSize
}

cloth.size = 'large'
