interface Foo {
    readonly bar: number;
    readonly bas: number;
}

const foo: Foo = { bar: 1, bas: 2 };
foo.bar = 11;