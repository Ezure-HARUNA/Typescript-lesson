//typeエイリアス


// let clothSize: 'small' | 'medium' | 'large' = 'large'
//! →長い

type ClothSize = 'small' | 'medium' | 'large'
let clothSize: ClothSize = 'large';
const cloth: {
    color: string;
    size: ClothSize
} = {
    color: 'white',
    size: 'medium'
}