package com.lecture.section04.overflow;

public class Application {
    public static void main(String[] args) {
        byte num = 127; // byte의 최대 저장 범위
        num++;
        // 오버플로우 : 자료형이 저장할 수 있는 최대 범위를 넘어가는 현상
        System.out.println(num); // byte의 저장 범위는 -128~127이므로 최댓값에서 1이 더해진 경우 최소값으로 넘어감 (오버플로우)

        byte num2 = -128;
        num2--;
        System.out.println(num2); // 최소값에서 1을 뺀 경우 최댓값으로 넘어감 (언더플로우)

        int firstNum = 1000000;
        int secondNum = 700000;

        int multi = firstNum * secondNum;
        System.out.println(multi); // int의 저장범위를 넘어서서 오버플로우가 발생해 음수값 출력

        long longNum = firstNum * secondNum;
        System.out.println(longNum); // 연산을 할 때 변수들의 자료형이 int인 상태이기 때문에 longNum이 long이더라도 int끼리 연산해서 나온 오버플로우된 값을 담아버림

        longNum = (long) firstNum * secondNum; // 피연산자 하나를 미리 long으로 변환하면 전체 계산이 long으로 처리
        System.out.println(longNum);
    }
}
