/*
* 연산자
* 자바스크립트에서 자주 사용되는 연산자는 산술, 할당, 증감 연산자 등이 있다.
*/

// 1. 산술 연산자
const a = 9;
const b = 7;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//

// 3. 증감 연산자
// ++는 1증가, --는 1감소
// 전위 증감: 값을 먼저 바꾸고, 바뀐 값을 사용한다.
// 후위 증감: 현재 값을 먼저 사용하고, 그 다음 값을 바꾼다.
let d = 5;
console.log(d++);
console.log(++d);
console.log(d--);
console.log(--d);