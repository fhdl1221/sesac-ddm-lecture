package com.lecture.section02.package_and_import;

import com.lecture.section01.method.Calculator;

import static com.lecture.section01.method.Calculator.maxNumberOf;

public class Application1 {
    public static void main(String[] args) {

        // non-static 메소드
        com.lecture.section01.method.Calculator calc = new com.lecture.section01.method.Calculator();
        int min = calc.minNumberOf(30, 20);
        System.out.println("min = " + min);

        // static 메소드
        int max = maxNumberOf(30, 20);
        System.out.println("max = " + max);

        Calculator calc2 = new Calculator();

        int max2 = maxNumberOf(30, 20);

        int max3 = maxNumberOf(30, 20); // static import 해서 클래스명 생략 가능, 선택적으로 사용~!
    }
}
