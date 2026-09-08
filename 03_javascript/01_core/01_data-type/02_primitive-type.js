/*
* 동적 타입 언어 (JS, Python 등)
* 변수에 현재 들어있는 값에 따라 타입이 결정된다
*/

/*
* 1. 숫자(Number)
* 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다
*/

const age = 30;
console.log(age);
console.log(typeof age);

/*
* 문자열 타입
* 문자열은 작은 따옴표(''), 큰 따옴표(""), 또는 백틱(``)으로 텍스트를 감싼다
*/

const string = "문자열";
console.log(string);
console.log(typeof string);

/*
* 불린(Boolean): 논리적 참, 거짓을 나타내는 true와 false뿐이다
*/

const isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

/*
* null: 명시적으로 값이 없음을 의도적으로 명시할 때 사용
*/

const address = null;
console.log(address);
console.log(typeof address); // null의 타입이 object인 것은 오래된 자바스크립트의 버그
/*
* undefined: 변수에 값이 할당되지 않았을 때 자동으로 할당되는 값
*/
let salary;
console.log(salary);
console.log(typeof salary);

/*
* 템플릿 리터럴
* ES6부터 도입된 문자열 표기법
* 작은 따옴표, 큰 따옴표 대신 백틱을 사용해 표현한다
*/
const lastName = '김';
const firstName = '규리';

console.log('제 이름은 ' + lastName + firstName + '입니다'); // 예전 방식
console.log(`제 이름은 ${lastName}${firstName}입니다`); // 템플릿 리터럴
console.log(`안녕하세요.
제 이름은 김규리입니다.`); // 백틱을 사용하면 줄바꿈도 허용되고 모든 공백이 있는 그대로 적용된다
const str = "안녕하세요. \n반갑습니다.";
console.log(str);
