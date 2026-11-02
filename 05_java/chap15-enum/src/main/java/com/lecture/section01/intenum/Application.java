package com.lecture.section01.intenum;

public class Application {
    public static void main(String[] args) {

        int subject1 = Subjects.JAVA;
        int subject2 = Subjects.HTML;

        if(subject1 == subject2){
            System.out.println("두 과목은 같은 과목입니다");
        }
    }

    public static void printSubject(int subjectNumber) {
        String subject = "";
        switch(subjectNumber){
            case Subjects.JAVA: subject="JAVA"; break;
            case Subjects.HTML: subject="HTML"; break;
        }
        System.out.println("전달받은 괌고");
    }
}
