//Enum
//→特定のまとまった型を列挙する型

enum CoffeeSize  {
    //=以降を省略すると、0から始まる番号になる
    SHORT= 'SHORT',
    TALL= 'TALL',
    GRANDE= 'GRANDE',
    VENTI= 'VENTI',
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;