package com.hw1.run;

import com.hw1.model.dto.Employee;
import com.hw1.model.dto.Student;

import java.util.Scanner;

public class Run {
    public static void main(String[] args) {
        Student[] studens = new Student[3];
        studens[0] = new Student("홍길동", 20, 178.2, 70.0, 1, "정보시스템공학과");
        studens[1] = new Student("김말똥", 21, 187.3, 80.0, 2, "경영학과");
        studens[2] = new Student("강개순", 23, 167.0, 45.0, 4, "정보통신공학과");

        for(Student student : studens) {
            System.out.println(student.information());
        }

        Employee[] employees = new Employee[10];
        Scanner sc = new Scanner(System.in);
        int count = 0;
        while(true) {
            System.out.println("사원의 이름을 입력하세요: ");
            String name = sc.nextLine();

            System.out.println("나이를 입력하세요: ");
            int age = sc.nextInt();

            System.out.println("신장을 입력하세요: ");
            double height = sc.nextDouble();

            System.out.println("몸무게를 입력하세요: ");
            double weight = sc.nextDouble();

            System.out.println("급여를 입력하세요: ");
            int salary = sc.nextInt();

            sc.nextLine();

            System.out.println("부서를 입력하세요: ");
            String dept = sc.nextLine();

            employees[count] = new Employee(name, age, height, weight, salary, dept);
            count++;

            if(count == 10) {
                System.out.println("최대 사원 정보가 입력되었습니다. 종료합니다.");
                break;
            }

            System.out.println("계속 추가하시겠습니까? (y/n): ");
            String answer = sc.nextLine();
            if(!answer.equalsIgnoreCase("y")) {
                break;
            }
        }

        for(int i = 0; i < count; i++) {
            System.out.println(employees[i].information());
        }
    }
}
