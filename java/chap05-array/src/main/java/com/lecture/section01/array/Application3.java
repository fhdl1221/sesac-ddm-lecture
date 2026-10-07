package com.lecture.section01.array;

import java.util.Scanner;

public class Application3 {
    public static void main(String[] args) {
        /* 5명의 자바 점수를 정수로 입력받아 합계와 평균을 실수로 구하는 프로그램 만들기 */

        // 1. 5명의 점수를 저장할 배열을 할당한다
        int[] score = new int[5];

        // 2. 키보드로 점수를 입력받는다
        for(int i = 0; i < score.length; i++){
            Scanner sc = new Scanner(System.in);
            System.out.println((i + 1) +"번째 점수를 입력하세요:");
            score[i] = sc.nextInt();
        }

        // 3. 합계와 평균을 계산한다
        int sum = 0;
        double avg;
        for(int i = 0; i < score.length; i++){
            sum += score[i];
        }
        avg = sum / score.length;

        // 4. 합계와 평균 출력
        System.out.println("합계 : " + sum);
        System.out.println("평균 : " + avg);
    }
}
