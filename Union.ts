//Union型

let unionType: number | string  = 10;
unionType.toUpperCase()
unionType = 'hello';

let unionTypes: (number | string)[] = [21, 'hello']

interface Hoge {
    foo: string;
    bar: number;
  }
  interface Piyo {
    foo: number;
    baz: boolean;
  }
  
  type HogePiyo = Hoge | Piyo;
  
  const obj: HogePiyo = {
    foo: 'hello',
    bar: 0,
  };