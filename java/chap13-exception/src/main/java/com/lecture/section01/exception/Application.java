package com.lecture.section01.exception;

public class Application {
    public static void main(String[] args) throws Exception {

//        int number = Integer.parseInt("abc");
//        System.out.println(number);

        /*
        * 예외처리(Exception Handling)
        *
        * 프로그램 실행 중 발생 문제를 감지하고 안내/기록/복구 방법을 정하는 것
        * */

        ExceptionTest exceptionTest = new ExceptionTest();
        exceptionTest.checkEnoughMoney(10000, 50000);
        exceptionTest.checkEnoughMoney(40000, 20000);
    }
}
