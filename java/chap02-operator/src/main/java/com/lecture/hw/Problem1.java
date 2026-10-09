package com.lecture.hw;

import java.util.Scanner;

public class Problem1 {
    public static void main(String[] args) {
        int n1;
        int n2;

        Scanner sc = new Scanner(System.in);
        n1 = sc.nextInt();
        n2 = sc.nextInt();

        int max = Math.max(n1, n2);

        System.out.println("두 수 중 큰 수는 " + max + "입니다.");
    }
}
