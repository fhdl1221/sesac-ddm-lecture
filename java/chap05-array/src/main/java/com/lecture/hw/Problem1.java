package com.lecture.hw;

import java.util.Scanner;

public class Problem1 {
    public static void main(String[] args) {
        int num;

        Scanner sc = new Scanner(System.in);
        System.out.println("홀수인 양의 정수를 입력하세요 : ");
        num = sc.nextInt();

        if(num % 2 == 0) {
            System.out.println("양수 혹은 홀수만 입력해야 합니다");
        }

        int[] result = new int[num];
        for(int i = 0; i <= num / 2; i++) {
            result[i] = i + 1;
        }
        for(int i = num / 2 + 1; i < num; i++) {
            result[i] = num - i;
        }

        for(int i = 0; i < num; i++) {
            System.out.print(result[i] + " ");
        }
    }
}
