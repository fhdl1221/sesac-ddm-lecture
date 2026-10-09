package com.hw;

import java.util.Scanner;

public class Problem3 {
    public static void main(String[] args) {
        int num;

        Scanner sc = new Scanner(System.in);
        System.out.println("정수를 입력하세요 : ");
        num = sc.nextInt();

        String result = "";

        for(int i = 1; i <= num; i++){
            if(i % 2 == 0){
                result += "박";
            } else {
                result += "수";
            }
        }

        System.out.println(result);
    }
}
