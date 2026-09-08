/*
 *변수를 생성할 때 우리는 변수를 선언한다고 표현한다.
 *
 *변수 선언 방법
 *키워드 변수명;
 *
 *키워드: 변수를 어떤 규칙으로 만들지 정함
 *변수명: 값을 다시 사용할 때 부를 변수 이름
 */

// var: ES5까지 사용했던 유일한 키워드
// 단점을 보완하기 위해 ES6에서 새로운 키워드인 let, const를 도입했다.
var number; // 변수 선언
number = 5; // 값 할당
console.log(number);

// let: 값을 변경할 수 있는 변수 선언
let greeting = "Hello, Node.js"; // 변수 선언과 동시에 값 할당
console.log(greeting);

greeting = "welcome!";
console.log(greeting);

// const: 재할당 금지
const num = 1;
console.log(num);
// num = 2;
console.log(num);

// 변수명 규칙
// 변수 이름에는 문자, 숫자, _, $ 등을 사용할 수 있다
// 변수 이름은 숫자로 시작할 수 없고, 예약어를 사용할 수 없다
// 카멜케이스를 사용하는 것이 일반적이다
const userName = "panda"; // 두번째 단어부터 첫 글자를 대문자로 쓰는 camelCase가 일반적
const userAge = 5;

console.log(userName);
console.log(userAge);