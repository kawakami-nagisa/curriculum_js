//変数宣言
let name = "hoge";
console.log(name);

//定数はconst
const email = "mitarashi0856@gmail.com";
console.log(email);

//変数の二重宣言はNG、nameの中身「hoge」を「hugu」にするときは
name = "hugu";
console.log(name);

name = "池田"
console.log(name + "くん");

let number = 10;
console.log(number * 3);
//文字全体をバックフォートで囲み、変数を${}で囲むことで一つの文字列に複数の変数や定数を埋め込むことが可能
console.log(`${name}くんは${number}月生まれです`);

name = "iwasaki";
//console.log(age);
//定義されていないのでdefineエラーが発生する

//課題
const price1 = 100;
console.log(price1 * 2);

const price2 = 500;
console.log(price2 * 2);