package com.lecture.hw;

import java.util.Scanner;

public class Problem4 {
    public static void main(String[] args) {
        double score;
        char grade;

        Scanner sc = new Scanner(System.in);
        score = sc.nextDouble();

        score = (int) score;

        if(score >= 90)
            grade = 'A';
        else if(score >= 80)
            grade = 'B';
        else if(score >= 70)
            grade = 'C';
        else if(score >= 60)
            grade = 'D';
        else
            grade = 'F';

        System.out.println("홍길동의 이번 점수등급은 " + grade + "입니다.");
    }
}
