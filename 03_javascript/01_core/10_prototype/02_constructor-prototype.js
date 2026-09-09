// const student1 = {
//     name: "판다",
//     age: 8,
// };

// const student2 = {
//     name: "다람쥐",
//     age: 5,
// };

function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student("판다", 8);
const student2 = new Student("다람쥐", 5);

Student.prototype.activate = true;
Student.prototype.getInfo = function () {
    return `${this.name}은 ${this.age}세 입니다.`;
};


// new 키워드를 이용해서 만들면 생성자 함수의 prototype(Student.prototype) 객체에 연결된다
const student3 = new Student('홍길동', 20);
const student4 = new Student('장보고', 30);

console.log(Object.getPrototypeOf(student3) === Student.prototype);
console.log(Object.hasOwn(student3, 'getInfo'));  // 공통 객체에 정의해놨기 때문에 false

console.log(student3.activate);

// 일단 본인한테서 getInfo를 찾는데 없으므로 공통 객체의 프로토타입에 있는지 확인
console.log(student3.getInfo());
console.log(student4.getInfo());

// student3과 student4는 다른 객체지만 두 객체가 같은 Student.prototype을 통해 동일한 getInfo 함수에 접근하기 때문에 true
console.log(student3.getInfo === student4.getInfo);

student3.age = 35;
console.log(student3.getInfo());