package com.hw;

import java.util.Scanner;

public class Problem2 {
    public static void main(String[] args) {
        int salary;
        int sales;
        int totalSalary;
        int bonus;

        Scanner sc = new Scanner(System.in);
        System.out.println("월 급여 입력 : ");
        salary = sc.nextInt();
        System.out.println("매출액 입력 : ");
        sales = sc.nextInt();

        if(sales >= 50000000)
            bonus = 5;
        else if(sales >= 30000000)
            bonus = 3;
        else if(sales >= 10000000)
            bonus = 1;
        else
            bonus = 0;

        totalSalary = salary + (int) (sales * (bonus * 0.01));

        System.out.println("매출액 : " + sales);
        System.out.println("보너스율 : " + bonus + "%");
        System.out.println("월 급여 : " + salary);
        System.out.println("보너스 금액 : " + (int) (sales * (bonus * 0.01)));
        System.out.println("총 급여 : " + totalSalary);
    }
}
