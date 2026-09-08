/**
 * 스코프 - 변수를 사용할 수 있는 범위
 */

function calculateArea(width, height) {
    const area = width * height;
    console.log('함수 안: ', area);
    return area;
}

const result = calculateArea(10, 20);
console.log(result);
// console.log(area);
// console.log(width);

const outerValue = '바깥쪽 값';
if (true) {
    const blockValue = '블록 안의 값';
    console.log(outerValue);
    console.log(blockValue);
}

// console.log(blockValue); // 블록 밖에서 블록 안에 있는 변수는 호출 불가
