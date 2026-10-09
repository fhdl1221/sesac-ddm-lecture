package com.lecture.hw;

import java.util.Scanner;

public class Problem2 {
    public static void main(String[] args) {
        int score;

        Scanner sc = new Scanner(System.in);
        score = sc.nextInt();

        System.out.println((score >= 60) ? "합격입니다" : "아쉽지만 불합격입니다");
    }
}
