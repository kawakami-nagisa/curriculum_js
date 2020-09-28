
function japanese(){
    console.log("おはよう");
    console.log("こんにちは");
    console.log("こんばんは");
    console.log("ありがとう");
    console.log("どういたしまして");
}
japanese();

//function 関数名(){}
//{}の中に処理をいれる

//工場(関数)
// function kojo (果物){
    //ジュースを作る処理
    //↓注文者にジュースを届ける
//     return ジュース;
// }
// kojo ('みかん');
//注文する側
// kojo('みかん');
// kojo('りんご');
//↓注文者にジュースを届ける

//returnにより処理が終わったものを返してくれる準備はできた。
//受け取る側が、受け取る場所を作っておく・・・変数で！

// let mikanJuice = kojo('みかん');
// kojo('みかん');

// 【要件】
// 関数名：createJuice
// 仮引数名：fruits
//①関数名を適切なものに変えてください
//②仮引数を適切なものに変えてください
function createJuice(fruite) {
    //③「〇〇を受け取りました。ジュースにして返します」と出力
    console.log(fruite + 'を受け取りました。ジュースにして発送します')
    //④受け取った果物にジュースという文字列を結合して、呼び出し元に返す
    return fruite + 'ジュース';
}
//⑤関数の実行：「みかん」を渡して、結果を受け取れるように適当な変数（orangeJuice）を用意
let orangeJuice = createJuice('みかん');
//⑥返ってきた変数を利用して「〇〇が届きました」と出力する
console.log(orangeJuice + 'が届きました')