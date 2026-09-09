'use strict';  // 엄격 모드

function Student(name, age) {
    console.log(`this가 있는가? : `, this !== undefined);
    console.log('name이 있는가? : ', 'name' in this);
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}는 ${this.age}세 입니다.`;
    };
    console.log(`초기화한 값 : `, this.name, this.age);
}

const student = new Student('호랑이', 50);
console.log(`객체를 반환받았는가:`, typeof student === 'object');

function Dog(name, age) {
    if (!new.target) { // new.target: new Dog를 호출하면 Dog를 가리키고 일반 호출로 하면 undefined이다
        console.log('new 없이 호출했네요~ new를 붙여서 다시 실행합니다');
        return new Dog(name, age);
    }
    this.name = name;
    this.age = age;
}

const dog = Dog('바둑이', 1);
console.log(dog);