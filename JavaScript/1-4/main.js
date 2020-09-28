// let num = 1;
// //while文
// while(num <= 100){
//     console.log(num);
//     num++;
// }
//do while文
// num = 1;
// do{
//     console.log(num);
//     num++;
// }while(num <= 100);


// //for文
// for(let num = 1;num <= 100; num++){
//     console.log(num);
// }

//breakとcontinue
//break・・・ループを強制終了
//continue・・・その処理をスキップして、次の条件式の評価を行う
//break
// num = 0;
// while(num < 5){
//     if(num === 3){
//         break;
//     }
//     console.log(num);
//     num++;
// }
//条件：numは５以下の値でもしnumが３になったら処理を終了させる。それまではnumを＋１して表記

//continue
// while(num < 5){
//     if(num === 2){
//         continue;
//     }
//     console.log(num);
//     num++;
// }

let num = 1;
while(num <= 100){
    if(num % 3 === 0){
        console.log("fizz!");
        num++;
    }else if(num % 5 === 0){
        console.log("buss!!");
        num++;
    }else if(num % 3 === 0 && num % 5 === 0){
        console.log("fizzbuzz!!");
    }else{
        console.log(num);
        num++;
    }
}