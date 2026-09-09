const user = {
    id: "user",
    activate: true,
    login: function () {
        console.log(`${this.id}님이 로그인 되었습니다.`);
    },
};

// const student = {
//     passion: true
// };

// create: 새로운 빈 객체를 만들고, 그 객체가 프로퍼티를 찾을 때 user도 살펴볼 수 있도록 연결한다.
// 즉, student의 프로토타입을 user로 설정하는 코드
const student = Object.create(user);
student.passion = true;

console.log(student.activate);

console.log(student.passion);

// student가 프로토타입으로 연결한 객체 확인
console.log(Object.getPrototypeOf(student));

// hasOwn : student가 activate를 직접 가지고 있는가
console.log('자신의 activate:', Object.hasOwn(student, 'activate'));  // activate는 student가 직접 갖고 있는게 아님
console.log('자신의 activate:', Object.hasOwn(student, 'passion'));  // passion은 student에 추가했기 때문에 직접 갖고 있음

// in 연산자는 직접 갖고 있는게 아니더라도 student에서 activate를 사용할 수 있는지
console.log('activate' in student);  // 직접 갖고 있진 않지만 사용할 순 있음

const greedyStudent = Object.create(student);
greedyStudent.greed = true;
greedyStudent.id = 'student01';

console.log(greedyStudent.activate);
console.log(greedyStudent.passion);
console.log(greedyStudent.missing);

console.log(greedyStudent.id);  // 해당 객체 내에 있는 프로퍼티면 해당 값 출력. 없을 때 연결된 위의 객체까지 확인
console.log(user.id);

// 호출 주체인 점(.) 앞의 객체의 this를 참조
// 호출코드는 greedyStudent이기 때문에 메서드 안의 this는 user가 아닌 greedyStudent를 가리킴
greedyStudent.login();  

delete greedyStudent.id;
console.log(greedyStudent.id);
greedyStudent.login();