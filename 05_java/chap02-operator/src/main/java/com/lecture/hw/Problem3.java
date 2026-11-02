package com.lecture.hw;

import java.util.Scanner;

public class Problem3 {
    public static void main(String[] args) {
        int num;

        Scanner sc = new Scanner(System.in);
        num = sc.nextInt();

        System.out.println((num % 2 == 0) ? "입력하신 수는 짝수입니다" : "입력하신 수는 홀수입니다");
    }
}
