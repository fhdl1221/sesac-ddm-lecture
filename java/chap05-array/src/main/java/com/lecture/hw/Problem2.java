package com.lecture.hw;

import java.util.Scanner;

public class Problem2 {
    public static void main(String[] args) {
        int[] arr = new int[4];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) (Math.random() * 10);

            for (int j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    i--;
                    break;
                }
            }
        }

        Scanner sc = new Scanner(System.in);
        int count = 10;
        while(count > 0) {
            System.out.println(count + "회 남으셨습니다.");
            System.out.println("4자리 숫자를 입력하세요 : ");
            String number = sc.next();

            if(number.length() != 4) {
                System.out.println("4자리의 정수를 입력해야 합니다.");
                continue;
            }

            int[] narr = new int[4];
            for(int i = 0; i < narr.length; i++) {
                narr[i] = number.charAt(i) - '0';
            }

            int strike = 0;
            int ball = 0;

            for(int i = 0; i < 4; i++) {
                for(int j = 0; j < 4; j++) {
                    if(arr[i] == narr[j]) {
                        if(i == j)
                            strike++;
                        else
                            ball++;
                    }
                }
            }

            if(strike == 4) {
                System.out.println("정답입니다");
                break;
            } else {
                System.out.println("아쉽네요 " + strike + "S " + ball + "B 입니다.");
                count--;
            }
        }

        if(count == 0) {
            System.out.println("10번의 기회를 모두 소진하셨습니다. 프로그램을 종료합니다.");
        }
    }
}
