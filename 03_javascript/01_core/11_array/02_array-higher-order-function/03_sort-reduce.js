/**sort, reduce */
const numbers = [3, 1, 9, 10, 5];

// 기본 sort()는 숫자를 문자열로 보고 순서를 정렬함
const sorted = numbers.sort();  //  원본 배열을 정렬한다.
console.log(sorted);
console.log(sorted === numbers);

numbers.sort((a, b) => a - b);
/**
 * 반환값 음수 : a를 앞에 정렬
 * 반환값 양수 : b를 앞에 정렬
 * 0 : 이 비교 기준에서 같은 순위로 취급
 */
console.log(numbers);

// reduce
const amounts = [1000, 2000, 3000];

let sum = 0;
// 누적하기 = for문 사용
for (let i = 0; i < amounts.length; i++) {
    sum += amounts[i];
}
console.log(sum);

// 누적하기 - reduce 사용(반환값을 받아 다음 호출로 넘겨준다)
// reduce(콜백함수, 초기값)
const total = amounts.reduce((sum, current) => {  // sum: 누적값, current: 이번에 처리할 배열 요소
    return sum + current;
}, 0)

console.log('빈 배열 합계: ', [].reduce((sum, current) => sum + current, 0));