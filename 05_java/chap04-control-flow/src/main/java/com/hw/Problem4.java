package com.hw;

import java.util.Scanner;

public class Problem4 {
    public static void main(String[] args) {
        int random = (int) (Math.random() * 100) + 1;
        int num;
        int count = 0;

        Scanner sc = new Scanner(System.in);

        while(true) {
            System.out.println("정수를 입력하세요 : ");
            num = sc.nextInt();
            count++;

            if (num > random) {
                System.out.println("입력하신 정수보다 작습니다.");
            } else if (num < random) {
                System.out.println("입력하신 정수보다 큽니다.");
            } else {
                System.out.println("정답입니다. " + count + "회 만에 정답을 맞추셨습니다.");
                break;
            }
        }
    }
}
