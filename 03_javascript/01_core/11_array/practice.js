const products = [
    { name: "노트", price: 3000, stock: 5 },
    { name: "펜", price: 1000, stock: 0 },
    { name: "파일", price: 2000, stock: 3 },
];

// 재고가 0보다 큰 상품
const stockProducts = products.filter((product) => product.stock > 0);

// 가격 오름차순으로 정렬. a와 b가 객체이므로 a.price로 접근
stockProducts.sort((a, b) => a.price - b.price);

// 상품 이름만 담긴 새 배열
const productsName = stockProducts.map((product) => product.name);
console.log(productsName);  // ['파일', '노트']

// 판매 가능한 상품만 담긴 배열이 stockProducts, 한 개씩 총액 더하는거니까 reduce() 사용
const total = stockProducts.reduce((sum, current) => {
    return sum + current.price;  // current가 객체 상태의 요소니까 current.price로 접근
}, 0);

// 이름이 '펜'인 상품
const product = products.find((product) => product.name === "펜");
console.log(product);
// 품절 상태(stock===0)인 상품이 하나라도 있는지 확인 -> some()
const hasProduct = products.some((product) => product.stock === 0);

// 모든 상품의 가격이 양수인지 확인 -> every()
const productPrice = products.every((product) => product.price > 0);

// 판매 가능한 상품의 이름과 가격 출력
stockProducts.forEach((product) => {
    console.log(`${product.name}: ${product.price}원`);
});

// 원본 상품 순서 확인
console.log(products);
