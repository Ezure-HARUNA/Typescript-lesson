//typeエイリアス
//冗長別名を付けるtscするとtype部分の記述は消える
//

type ClothSize = 'small' | 'medium' | 'large'
let clothSize: ClothSize = 'small'
const cloth: {
    color: string;
    size: ClothSize
} = {
    color: 'white',
    size: 'medium'
}