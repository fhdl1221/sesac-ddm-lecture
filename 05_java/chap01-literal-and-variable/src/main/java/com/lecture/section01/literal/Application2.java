package com.lecture.section01.literal;

public class Application2 {
    public static void main(String[] args) {

        /* 숫자와 숫자의 연산 */
        System.out.println(123 + 456);
        System.out.println(123- 23);
        System.out.println(123 * 10);
        System.out.println(123 / 10);
        System.out.println(123 % 10);

        // 실수와 실수의 연산
        System.out.println(1.23 + 1.23);

        // 정수와 실수의 연산
        System.out.println(123 + 0.5); // 항상 실수 출력

        /* 문자의 연산 */
        System.out.println('a' + 'b'); // 유니코드 값으로 연산(A = 65, a = 97)
        System.out.println('a' + 1);

        /* 문자열의 연산 */
        System.out.println("abc" + "def"); // 문자열과 문자열의 '+' 연산 결과는 문자열 합치기가 된다
        System.out.println("hello" + 123); // 다른 형태의 값들도 문자열로 취급하여 문자열 합치기가 된다

        /* 논리값의 연산 */
        /* boolean에는 숫자처럼 +, -, /, % 같은 산술 연산을 할 수 없다 */
        System.out.println("9" + 9); // 99
        System.out.println(9 + 9 + "9"); // 189
    }
}
