package com.greedy.level01.basic.student.run;

import com.greedy.level01.basic.student.model.dto.StudentDTO;

import java.util.Scanner;

public class Application {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        StudentDTO[] students = new StudentDTO[10];

        int count = 0;

        while(students.length > count){
            System.out.println("학년 : ");
            int grade = sc.nextInt();

            System.out.println("반 : ");
            int classroom = sc.nextInt();

            sc.nextLine();

            System.out.println("이름 : ");
            String name = sc.nextLine();

            System.out.println("국어점수 : ");
            int kor = sc.nextInt();

            System.out.println("영어점수 : ");
            int eng = sc.nextInt();

            System.out.println("수학점수 : ");
            int math = sc.nextInt();

            students[count] = new StudentDTO(grade, classroom, name, kor, eng, math);
            count++;

            if(count == students.length){
                System.out.println("최대 학생 정보를 입력했습니다.");
                break;
            }

            System.out.println("계속 추가할 겁니까 ? (y/n) : ");
            String answer = sc.next();
            if(answer.equalsIgnoreCase("n")){
                break;
            }
        }

        for(int i = 0; i < count; i++){
            System.out.println(students[i].getInformation());
        }
    }
}
