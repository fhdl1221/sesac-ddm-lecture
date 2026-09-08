// return: 결과를 함수를 호출한 곳으로 돌려준다
function add(a, b) {
    return a + b; // 결과값을 밖으로 던진다
}

const result = add(10, 20); // 던진 값을 result 변수에 담는다
console.log(result);
console.log(result * 2);

function printAdd(a, b) {
    console.log(a + b);
}

function returnAdd(a, b) {
    return a + b;
}

const printed = printAdd(10, 20);
const returned = returnAdd(10, 20);
console.log(printed);
console.log(returned);

// 함수의 종료
function sayHello(name) {
    return `${name}님 안녕하세요!`;
    console.log("출력이 되나요?"); // return을 만나는 순간 함수 실행이 끝나기 때문에 return 아래쪽 코드는 실행되지 않는다
}
console.log(sayHello("홍길동"));

// 반환값의 생략
function noReturn() {
    console.log("함수 호출됨");
    return; // 값을 명시하지 않음
}

function emptyFunction() {
    // return문 자체가 없음
}

console.log(noReturn());
console.log(emptyFunction());

// 조기 종료 Early return
function registerUser(nickname) {
    // 1. 조건이 안 맞으면 즉시 종료(Early Return)
    if (nickname.length < 2) {
        console.log("닉네임이 너무 짧습니다");
        return; // 여기서 함수를 끝냄
    }
    console.log(`${nickname}님 환영합니다~`);
}

registerUser('나');
registerUser('권판다');