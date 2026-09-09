/**생성자 함수 */

const student1 = {
    name: '판다',
    age: 5,
    getInfo: function () {
        return `${this.name}는 ${this.age}세 입니다.`;
    }
};

const student2 = {
    name: '코알라',
    age: 3,
    getInfo: function () {
        return `${this.name}는 ${this.age}세 입니다.`;
    }
};

console.log(student1.getInfo());
console.log(student2.getInfo());

// 생성자 함수명은 대문자로 시작
// 1. this라는 빈 객체를 만든다
// 2. 그 객체의 프로퍼티들을 할당한다
// 3. 완성된 this 객체가 호출 결과가 된다
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}는 ${this.age}세 입니다.`;
    }
    // return this; 라는 코드가 생략되어 있다고 생각. 자동으로 실행.
}

const student3 = new Student('원숭이', 40);  // 완성된 this 객체가 student3에 할당된다
console.log(student3.getInfo());

const student4 = new Student('고릴라', 30);
console.log(student4);

console.log('같은 객체인가:', student3 === student4);
student3.age = 31;
console.log(student3.getInfo());
console.log(student4.getInfo());