// 도서마다 제목과 가격은 다르지만, 수량을 받아 총액을 계산하는 방법은 같죠!!

// 데이터를 각 도서 객체에 저장하고 계산 함수는 함께 사용하도록 만들어 봅시다~😊

// 1. `Book(title, price)` 생성자에서 title과 price를 각 객체에 저장합니다.
// 2. `getTotal(quantity)`은 `Book.prototype`에 정의하고 현재 도서의 가격과 수량을 곱해 반환합니다.
// 3. 15000원 도서와 20000원 도서를 만들어 각각 두 권의 총액을 확인합니다.
// 4. 두 도서가 같은 getTotal 함수를 사용하는지 확인합니다.
// 5. book1이 getTotal을 직접 가지고 있는지, Book.prototype이 가지고 있는지 확인합니다.
// 6. 첫 도서의 가격을 18000원으로 바꾸고 두 도서의 총액을 다시 확인합니다. 수량 0도 확인합니다.

// Book 생성자
function Book(title, price) {
    this.title = title;
    this.price = price;
}

// Book.prototype에 getTotal 함수 정의
Book.prototype.getTotal = function (quantity) {
    return this.price * quantity;
};

// book1, book2 생성
const book1 = new Book("도서1", 15000);
const book2 = new Book("도서2", 20000);

// 총액 확인
console.log(`${book1.title} 두 권의 총액은 ${book1.getTotal(2)}원 입니다`);
console.log(`${book2.title} 두 권의 총액은 ${book2.getTotal(2)}원 입니다`);

// book1과 book2가 같은 getTotal을 사용하는지 확인
console.log(book1.getTotal === book2.getTotal);

// book1이 getTotal을 직접 갖고 있는지 확인
console.log(Object.hasOwn(book1, "getTotal"));  // getTotal은 book1이 직접 가지고 있지 않고 Book.prototype에 있으므로 false
console.log(Object.hasOwn(Book.prototype, "getTotal")); 

book1.price = 18000;
console.log(`${book1.title} 두 권의 총액은 ${book1.getTotal(2)}원 입니다`);
console.log(`${book2.title} 두 권의 총액은 ${book2.getTotal(2)}원 입니다`);

console.log(`${book1.title} 0 권의 총액은 ${book1.getTotal(0)}원 입니다`);
console.log(`${book2.title} 0 권의 총액은 ${book2.getTotal(0)}원 입니다`);
