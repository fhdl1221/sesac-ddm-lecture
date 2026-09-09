// 1. 이름과 나이를 전달받는 `Dog(name, age)` 생성자 함수를 작성합니다.
// 2. 전달받은 값을 새 객체의 name과 age 프로퍼티에 저장합니다.
// 3. `new`를 사용해 뽀삐 3살과 바둑이 5살 객체를 만듭니다.
// 4. 두 객체의 이름과 나이를 출력합니다.
// 5. 첫 번째 강아지의 나이만 4로 바꾸고 두 객체의 나이를 다시 출력합니다.

function Dog(name, age) {
    this.name = name;
    this.age = age;
}

const dog1 = new Dog("뽀삐", 3);
const dog2 = new Dog("바둑이", 5);

console.log(`${dog1.name}는 ${dog1.age}살 입니다.`);
console.log(`${dog2.name}는 ${dog2.age}살 입니다.`);

dog1.age = 4;
console.log(`${dog1.name}는 ${dog1.age}살 입니다.`);
console.log(`${dog2.name}는 ${dog2.age}살 입니다.`);

// 1. Book(title, price) 생성자를 작성하고 제목과 가격을 프로퍼티에 저장합니다.
// 2. getTotal(quantity) 메서드는 현재 책 가격과 수량을 곱해 반환합니다. 내부에서는 출력하지 않습니다.
// 3. ‘자바스크립트 입문’ 15000원과 ‘객체와 함수’ 20000원인 책 두 개를 new로 만듭니다.
// 4. 두 책의 두 권 총액을 출력합니다. 첫 책의 총액은 const 변수에 저장한 뒤 출력합니다.
// 5. 첫 책 가격을 18000으로 바꾸고 두 책의 두 권 총액을 다시 출력합니다.
// 6. 첫 책의 수량 0도 확인합니다.

function Book(title, price) {
    this.title = title;
    this.price = price;
    this.getTotal = function (quantity) {
        return this.price * quantity;
    }
}

const book1 = new Book('자바스크립트 입문', 15000);
const book2 = new Book('객체와 함수', 20000);

const book1Total = book1.getTotal(2);
console.log(`${book1.title}의 총액은 ${book1Total}입니다`);
console.log(`${book2.title}의 총액은 ${book2.getTotal(2)}입니다`);

book1.price = 18000;
console.log(`${book1.title}의 총액은 ${book1.getTotal(2)}원 입니다`);
console.log(`${book2.title}의 총액은 ${book2.getTotal(2)}원 입니다`);
console.log(`${book1.title}이 0권일 때 ${book1.getTotal(0)}원 입니다`);