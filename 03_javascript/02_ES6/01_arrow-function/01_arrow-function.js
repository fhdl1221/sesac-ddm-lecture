/**화살표 함수 */
"use strict";

const power = function (x) {
    return x * x;
};
console.log(power(3));

const arrowPower = (x) => {
    return x * x;
};
console.log("화살표 함수", arrowPower(3));

// 매개변수가 딱 하나인 경우 소괄호 생략 가능
// 표현식 본문 : 중괄호와 return 생략 가능 (=> 뒤에 실행할 내용이 하나의 표현식으로 작성되는 경우)
const square = x => x * x;
console.log(square(3));

// 매개변수가 없거나 여러개인 경우, 소괄호 생략 불가
const greet = () => '안녕하세요';
console.log(greet());
const add = (a, b) => a + b;
console.log(add(3, 4));

const calculateSquare = x => {
    return x * x;
}

// 중괄호 본문 : return을 꼭 명시해서 반환해야 함
const wrongSquare = x => {
    x * x;
}
console.log(wrongSquare(3));  // undefined

// 객체를 반환할 시, 소괄호로 감싸야 한다
// 함수 실행문이 아니고 반환할 객체를 만드는 표현식임을 표시해 주어야 한다
// 중괄호만 있으면 기본적으로 함수 실행문을 담는 중괄호로 해석하기 때문에 객체인 것을 구분하기 위해 소괄호 작성
const createUser = (id, name) => ({ id: id, name: name });
console.log(createUser(1, '판다'));

// 화살표 함수도 다른 함수에 콜백으로 전달 가능
function calculate(value, operation) {
    return operation(value);
}
console.log(calculate(3, power));
console.log(calculate(3, num => num * num));