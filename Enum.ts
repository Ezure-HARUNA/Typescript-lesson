//Enum
//列挙型→特定のまとまったグループのみを受け入れる
//大文字で命名するのが基本
enum CoffeeSize {
    SHORT= 'SHORT',
    TALL= 'TALL',
    GRANDE= 'GRANDE'
}
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT; 