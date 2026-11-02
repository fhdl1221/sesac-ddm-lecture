package com.hw;

import java.util.Scanner;

public class Problem1 {
    public static void main(String[] args) {
        int korean;
        int english;
        int math;

        Scanner sc = new Scanner(System.in);
        System.out.println("국어 점수를 입력하세요 : ");
        korean = sc.nextInt();
        System.out.println("영어 점수를 입력하세요 : ");
        english = sc.nextInt();
        System.out.println("수학 점수를 입력하세요 : ");
        math = sc.nextInt();

        int sum = korean + english + math;
        int avg = sum / 3;

        if(avg >= 60 && korean >= 40 && english >= 40 && math >= 40)
            System.out.println("합격입니다!");
        else {
            if(avg < 60)
                System.out.println("평균점수 미달로 불합격입니다.");
            if (korean < 40)
                System.out.println("국어 점수 미달로 불합격입니다.");
            if (english < 40)
                System.out.println("영어 점수 미달로 불합격입니다.");
            if (math < 40)
                System.out.println("수학 점수 미달로 불합격입니다.");
        }
    }
}
