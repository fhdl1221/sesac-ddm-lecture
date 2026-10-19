package com.lecture.section02.enumtype;

public class Application {
    public static void main(String[] args) {

        Subjects subject1 = Subjects.JAVA;
        Subjects subject2 = Subjects.HTML;

        if(subject1 == subject2) {
            System.out.println("두 과목은 같은 과목이다");
        } else {
            System.out.println("두 과목은 다른 과목이다");
        }

        printSubject(subject1);
        printSubject(subject2);
    }

    public static void printSubject(Subjects subject) {
        System.out.println("전달받은 과목 : " + subject.toString());
    }
}
