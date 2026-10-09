package com.lecture.hw;

import java.util.Scanner;

public class Problem5 {
    public static void main(String[] args) {
        int month;
        int day;
        String gift;

        Scanner sc = new Scanner(System.in);
        month = sc.nextInt();
        day = sc.nextInt();

        if(month >= 1 && month <= 6 && day >= 1 && day <= 15)
            gift = "배민 쿠폰";
        else if(month >= 7 && month <= 12 && day >= 16 && day <= 31)
            gift = "스타벅스 커피";
        else
            gift = "사탕";

        System.out.println("김규리의 선물은 " + gift + "입니다");
    }
}
