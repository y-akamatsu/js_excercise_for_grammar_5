// 課題1: 引数に渡した数値(整数)に応じて、奇数なら「true」、偶数なら「false」を返す「isOddNumber関数」を作る
//   - 関数宣言の形式で作ること
//   - 「isOddNumber関数」を定義した後に、console.logを使って「isOddNumber関数」の引数に次の数を入力して、期待している結果が返ってくること確認する
//     - 入力: 9, 期待する結果: true
//     - 入力: 14, 期待する結果: false
// ここにisOddNumber関数を作る

function isOddNumber(num){
  return num % 3 === 0;
} 
// ここにconsole.logを使って「9」「14」を引数に渡したときの結果値を出力する
console.log('9を入力したらtrueが返る', isOddNumber(9));
console.log('14を入力したらfalseが返る', isOddNumber(14));

// 課題2: 引数に渡した「1」以上の整数をつかって階乗の結果を返す「factorial関数」を作る (階乗とは: https://ja.wikipedia.org/wiki/%E9%9A%8E%E4%B9%97)
//   - 関数式の形式で作ること
//   - 「factorial関数」を定義した後に、console.logを使って「factorial関数」の引数に次の数を入力して、期待している結果が返ってくること確認する
//     - 入力: 4, 期待する結果: 24 (= 4 * 3 * 2 * 1)
//     - 入力: 5, 期待する結果: 120 (= 5 * 4 * 3 * 2 * 1)
//   - 様々な実装方法があるため次の3つの内、好きなやり方で実装して構わない
//     1. forループを使ったやり方
//     2. whileループを使ったやり方
//     3. 【チャレンジ問題】再帰関数を使ったやり方(参考記事: https://qiita.com/chuck0523/items/2c40a5da90a1d73ab956)

// ここにfactorial関数を作る
const factorial  = function(num){
let result = 1;
for(let i = num; i > 0; i--){
 result *= i;
}
return result
}
// ここにconsole.logを使って「4」「5」を引数に渡したときの結果値を出力する
console.log('期待する値は24', factorial(4));
console.log('期待する値は120', factorial(5));

//チャレンジ問題　再起関数

// 課題3: 引数に渡した、全ての小文字の文字列の先頭1文字を大文字に変換した文字列を返す「convertFirstCharacterToUpperCase関数」を作る
//   - アロー関数の形式で作ること
//   - 「convertFirstCharacterToUpperCase関数」を定義した後に、console.logを使って「convertFirstCharacterToUpperCase関数」の引数に次の文字列を入力して、期待している結果が返ってくること確認する
//     - 入力: 'hello', 期待する結果: 'Hello'
//     - 入力: 'world', 期待する結果: 'World'
//   - 「先頭1文字を大文字にするやり方」の参考記事: https://qiita.com/ichironagata/items/091f8cd629b82b0dcbf8
//charAt()  => 文字列の中から指定の位置の文字を返します。text.charAt(インデックス番号)
//toUpperCase() => 文字列の中から指定の位置の文字を返します。
//.slice()=> 文字列の中から開始位置から終了位置までの部分文字列を取り出し新しい文字列として返す。
//slice(start[, end])インデックス番号 endを書かなければその文字列の最後まで

// ここにconvertFirstCharacterToUpperCase関数を作る
const convertFirstCharacterToUpperCase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
// ここにconsole.logを使って「'hello'」「'world'」を引数に渡したときの結果値を出力する
console.log('helloを入力するとHelloが返される', convertFirstCharacterToUpperCase('hello'));
console.log('worldを入力するとWorldが返される', convertFirstCharacterToUpperCase('world'));
