//let first_variable = "hello world" //変数を宣言するには、letまたはconstキーワードを使用できます。

//let my_string = "Hello world" // string
//let my_second_string = "24" // string  //文字列 – 一重または二重で、引用符で囲まれた値はすべて文字列です。

//let my_number = 15 // number
//let my_second_number = "15" // string //数字 – これらの数字は引用符で囲まれていません。

//let my_array = [1, "hello", "4", "world"] //配列 – 複数の値を 1 つの変数に格納する場合は、配列が最適なオプションです。

//let my_boolean = true; //ブール – ブール値は文字列ではなく真または偽の値であるため、引用符で囲む必要はありません。

//let my_obj = {
   // name: "John snow",
   // aim: "Learning JavaScript",
   // age: 20,
//} //オブジェクト – オブジェクトを使用すると、データをキーと値のペアで保存できます。

//let my_button = document.querySelector("#id") //、ID に基づいて Web ページ上の要素を選択しています

//let addition = 1 + 1 // 2
//let addition = 1 + "1" // "11"
//let addition = "hello" + "world" // "hello world" 追加 – JavaScript では、プラス (+) 記号を使用して文字列を連結 (結合) したり、数値を追加したりします。

//let subtraction = 10 - 9 // 1 //減算 – マイナス記号 (-) を使用して数値を減算します。

//let multiplication = 2 * 2 // 4  //乗算 – 数値を乗算する場合、JavaScript で乗算にアスタリスクを使用します。

//let division = 4 / 2 // 2  //除算 – 除算記号 (/) を使用して数値を除算します。

//let if_true = 2 + 4 == 6 // true
//let if_false = 5 + 6 == 10 // false //等しい – 二重等号 (==) を使用して、JavaScript で 2 つの値が等しいかどうかを確認します。


//------------------------------------------------



let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");

console.log(add, subract);

add.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number (output.innerText) + 1;  //Numberを使わないとおかしくなる。
    if (result > 30) {
        result = 0;
      }
    output.innerText = result;

    // Every time the add button is pressed, this code will execute.
 });

subract.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;
  
    if (result < 0) {
      result = 0;
    }
  
    output.innerText = result;
 });  //減算する機能を追加しましょう。出力から 1 を差し引くだけです。





