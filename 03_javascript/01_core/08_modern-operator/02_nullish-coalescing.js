/**
 * null 병합 연산자
 * 좌항의 피연산자가 null 또는 undefined인 경우
 * 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다
 */

const test = null ?? '기본 값';
console.log(test);

// 빈 문자열과 같은 Falsy한 값을 false로 취급해서 생기는 문제가 있다
// const value = '' || '기본 값';
// console.log(value);  // 빈 문자열이 아닌 기본값으로 설정됨
const value = '' || '기본 값'; 
console.log(value);  // 빈 문자열을 주고 싶은건데 빈 문자열은 Falsy한 값이라 기본 값이 출력됨

// 이렇게 null이나 undefined가 아닌데 falsy한 값을 저장하고 싶을 때 ?? 사용