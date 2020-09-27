//算術演算子
let num1 = 10;
let num2 = 5;
let result;

//足し算
result = num1 + num2;
console.log(result);
//引き算
result = num1 - num2;
console.log(result);
//掛け算
result = num1 * num2;
console.log(result);
//割り算
result = num1/num2;
console.log(result);
//余剰
result = num1%num2;
console.log(result);
//文字列の結合の例
console.log("hello " + "world!!");
//変数の結合の例
let myouji = '川上';
let namae = '渚沙';
let shimei = myouji + namae;
console.log(shimei);
//自分自身に+1,-1
let x = 1;
x++;
console.log(x);

let y = 2;
x--;
console.log(x);

//比較演算子
console.log(10 === 10);//true
console.log(10 === 5);//False

console.log(10 !== 5);//true
console.log(10 > 5);//true
console.log(10 > 20);//BがA未満の場合 → false
console.log(10 <= 10);//左辺は右辺の値10以上の値か → true

//条件分岐
let score = 0;
if (score >= 70){
    window.alert("合格！");
}else if (score === 0){
    window.alert("0点はまずいです");
}else{
    window.alert("不合格");
}

//論理演算子
//AND演算 A && B AとB両方の条件を満たす場合に true
//変数のあたいが10~20の間という条件
let a = 15;
if(a >= 10 && a <= 20){
    console.log(a);
}
let z = 10;
let v = 15;
//偶数の条件
if(z % 2 ===0){
    console.log(z);
}
//奇数の条件
if(v % 2 !== 0){
    console.log(v);
}

// 問1：次の条件を、論理演算子を使って表してください。
// ・変数aは10ではない
// ・変数bは10以上20未満、かつ偶数である。
let b = 16
if(a !== 10){
    console.log(a + "は10ではない");
}
if(b > 10 && b <= 20 && b%2 === 0){
    console.log(b + "は10以上20未満、かつ偶数");
}

// 問2：以下の条件を満たすように、記述してください
// ・変数xが、10〜20の値だった場合「成功です」と出力される
// ・それ以外は「失敗です」と出力される
// ・変数xには、最初に10を入れておいてください

x = 19;
if(x > 10 && x <=20){
    console.log("成功です");
}else{
    console.log("失敗です");
}
// 問3：以下の条件を満たすように、記述してください
// ・変数yが偶数なら「偶数です」と出力される
// ・変数yが奇数なら「奇数です」と出力される
// ・変数yには、最初に0を入れておいてください

y = 1;
if(y % 2 === 0){
    console.log("偶数です");
}else{
    console.log("奇数です");
} 