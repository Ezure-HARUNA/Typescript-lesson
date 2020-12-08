//watchモード
//保存した瞬間自動的にコンパイルされる
//  tsc index -w
//initで
//tsc --init
//→tsconfig.jsonが作成される
//tsc をその後実行すると、フォルダ内のファイルが全てコンパイルされる
var d = 'orange';
// {
//     ...
//     "scripts": {
//       ...
//       "watch": "tsc -w"
//       ...
//     },
//     ...
//   }
// をpackage.jsonに貼り付け、
// npm run watch を実行すればフォルダ内のファイルは自動的に保存される
//!tsconfig.jsonの設定
//あるファイルを除外してコンパイルする
// "exclude": [
//     "sec3-compire/compiler.ts",
//     // どのcompirer.tsものぞく場合
//     "**/compirer.ts",
//     "*.spec.ts"
// ]
//特定のファイルのみをコンパイルする
// "include": [
//     "index.ts"
// ]
// "files": [
//     "sec3-compire/compiler.ts",
// ]
//!libコンパイラーオプション
//lib→基本的にはコメントアウトでいい
//
var hello = "hello";
console.log(hello.toUpperCase);
var f = "hello";
//!きれいなコードを書く設定
//Additional Checks
// "noUnusedLocals": true,   
// →使われていない定義した値があったときにエラーを出す           
// "noUnusedParameters": true,        
// →使われていないパラメーターがあったときにエラーを出す
// "noImplicitReturns": true,    
//→暗黙的なreturnはダメ。        
"noFallthroughCasesInSwitch";
true,
    "noUncheckedIndexedAccess";
true,
;
/* Source Map Options */
// "sourceRoot": "",                    
// "mapRoot": "",                       
// "inlineSourceMap": true,               
// "inlineSources": true,   
