//any型
//何でも入れられる。JSの世界に戻る
//anyはなるべく使わない

let anything: any = true;
anything = 'hello';
anything = 'hello';
anything = ['hello', 33, true];
anything = {};

let banana = 'banana'
banana = anything;