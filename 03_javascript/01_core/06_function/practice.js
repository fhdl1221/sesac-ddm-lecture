// 간단한 실습
// 객체 생성
const book = {
    title: '자바스크립트 입문',
    price: 15000
};

// 총액 반환 함수
function calculateTotal(book, quantity) {
    return book.price * quantity;
}

// 2권의 총액 출력
const result = calculateTotal(book, 2);
console.log(result);

// 가격 18000으로 변경
book.price = 18000;

// 2권의 총액 출력
const result2 = calculateTotal(book, 2);
console.log(result2);

// 0권의 총액 출력
const result3 = calculateTotal(book, 0);
console.log(result3);

// 총액을 그대로 반환하는 콜백 함수
const regularPrice = function (total) {
    return total;
}

// 총액에서 3000원 할인된 금액을 반환하는 콜백 함수
const discountPrice = function (total) {
    if (total < 3000) {
        return 0;
    }
    return total - 3000;
}

function checkout(book, quantity, pricePolicy) {
    const total = calculateTotal(book, quantity);
    return pricePolicy(total);
} 

console.log(checkout(book, 2, regularPrice)); // 일반 가격
console.log(checkout(book, 2, discountPrice)); // 할인된 가격
console.log(checkout(book, 0, discountPrice)); // 0권일 때 가격