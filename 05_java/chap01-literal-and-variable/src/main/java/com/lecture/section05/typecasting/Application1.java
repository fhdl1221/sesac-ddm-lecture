package com.lecture.section05.typecasting;

public class Application1 {
    public static void main(String[] args) {
        /* 자동 형변환 규칙
        * - 서로 다른 숫자 타입을 연산하면 자바가 두 값을 함께 계산할 수 있는 타입으로 맞춘다
        * - 일반적으로 표현 범위가 더 넓은 타입으로 자동 변환한 뒤 연산한다
        * */

        /* 표현 범위가 더 넓은 숫자 자료형으로는 자동 형변환 */
        byte bnum = 1;
        short snum = bnum;
        int inum = snum;
        long lnum = inum;

        int num1 = 10;
        long num2 = 10;

//        int result1 = num1 + num2;
        long result2 = num1 + num2;

        /* 정수는 실수로 자동 형변환된다 */
        long eight = 8;
        float fnum = eight;
        System.out.println(fnum);

        /* 강제 형변환 */
        /* 바꾸려는 자료형으로 캐스트 연산자를 이용하여 형변환한다 */
        long lnum2 = 8;
        int inum2 = (int) lnum2;

        // 실수를 정수로 변경 시 강제 형변환 필요
        float fnum2 = 4.0f; // 정수는 기본적으로 int가 기본이고, 실수는 기본이 double이라서 float라는걸 알려주기 위해 접미사 필요
        int inum3 = (int) fnum2;
        System.out.println(inum3);
    }
}
