/**
 * array 배열
 * 관련된 값들을 하나의 목록으로 묶어서 관리한다
 */

const fruits = ['바나나', '복숭아', '키위'];
console.log(fruits);

// 배열이름[인덱스]
// 배열에서는 위치를 나타내는 번호(index가 있다
// 인덱스는 1이 아니라 0부터 시작한다
console.log(fruits[1]);  // 복숭아

console.log(fruits[3]);  // undefined

// 배열도 객체라서 프로퍼티가 존재. 그 중 length라는 프로퍼티를 사용하여 배열의 길이 출력
console.log(fruits.length);  // 배열의 길이 3

fruits[1] = '딸기';
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// for문을 활용한 배열 순회
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(typeof fruits);

// 배열인지 확인
console.log(Array.isArray(fruits));