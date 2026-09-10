const students = [
    { name: "홍길동", score: 90 },
    { name: "권판다", score: 80 },
    { name: "유관순", score: 95 },
];

console.log(students[0].name);

// for문으로 이름 출력
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// forEach 사용 - 배열 요소 하나씩 전달 받기
students.forEach((student) => {
    console.log(student.name);
});

// forEach()는 콜백을 호출할 때 현재 요소와 현재 인덱스를 전달해준다.
students.forEach((student, index) => {
    console.log(index + 1 + "번째 이름: " + student.name);
});

// forEach()는 콜백함수의 반환값을 모아주지 않는다
// forEach()의 반환값은 undefined
const ignoredNames = students.forEach((student) => student.name);
console.log(ignoredNames); // undefined

// map : 각 요소를 콜백의 반환값으로 바꾼 결과를 새 배열로 만들어준다
// 배열의 요소를 하나씩 콜백 함수로 전달하고 콜백 함수의 반환해주는 값을 새롭게 배열로 만들어준다
// 원본 배열에 영향을 주지는 않는다
const studentNames = students.map((student) => student.name);
console.log(studentNames);
console.log(students[0]);

const adjustedScores = students.map((student) => {
    return student.score + 5;  // 점수에 5를 더해서 반환하는 것이므로 원래 점수는 변경되지 않음
    // return student.score += 5;  // 이렇게 배열의 값을 변경하면 원래 점수도 변경됨
});
console.log(adjustedScores);
console.log(students[0]);