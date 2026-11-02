package com.greedy.level01.basic;

public class Application {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        calculator.checkMethod();

        int sum = calculator.sum1to10();
        System.out.println("1부터 10까지의 합 : " + sum);

        calculator.checkMaxNumber(10, 20);

        int sum1 = calculator.sumTwoNumber(10, 20);
        System.out.println("10과 20의 합은 : " + sum1);

        int minus = calculator.minusTwoNumber(10, 5);
        System.out.println("10과 5의 차는 : " + minus);
    }
}
