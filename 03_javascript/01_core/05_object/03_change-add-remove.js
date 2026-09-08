const dog = {
    name: '뽀삐'
}

// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값 갱신
dog.name = '감자';
// dog['name'] = '감자';

console.log(dog);

// const일 때 객체 안에 있는 프로퍼티의 값을 수정하거나 추가하는건 재할당 가능
// 다만 const인 객체 자체를 변경하는건 불가능

// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성된다
dog.age = 5;
console.log(dog);

// 삭제: delete 연산자 사용하여 프로퍼티를 삭제한다
// delete dog['name'];
delete dog.age;
console.log(dog);

// 프로퍼티 내부 값을 변경, 추가, 삭제 하는 것은 가능하지만
// 객체 자체를 재할당 하는 것은 불가능하다
// dog = {
//     name: '로이'
// } // TypeError: Assignment to constant variable.

// 존재확인: in 연산자
// 해당 객체가 특정 프로퍼티를 갖고 있는지 boolean 값으로 알려줌
console.log('name' in dog);
console.log('age' in dog);

// 객체 순회 (for...in): 객체의 프로퍼티 키를 하나씩 꺼내는 반복문
for (const key in dog) {
    console.log(`키: ${key}`);
    console.log(`값: ${dog[key]}`);
}