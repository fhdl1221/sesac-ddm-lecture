/* 
* 1. 마침표 표기법
* 2. 대괄호 표기법
*/

const dog = {
    name: '뽀삐',
    eat: function (food) {
        console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    }
}

console.log(dog.name);
dog.eat('사료');

// 대괄호 표기법
console.log(dog['name']); // 프로퍼티 키를 문자열로 적는다
dog[`eat`]('고구마');

// key가 변수에 담겨 있을 때
const prop = 'name';
console.log(dog.prop);