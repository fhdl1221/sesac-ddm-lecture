package com.lecture.section01.object;

public class Application {
    public static void main(String[] args) {

        /*
        * [API]
        * 프로그램을 만들 때 사용할 수 있도록 미리 제공되는 클래스와 메소드의
        * */

        Book book1 = new Book(1, "홍길동전", "허균", 50000);

        System.out.println("book1 = " + book1);

        Book book2 = new Book(2, "목민심서", "정약용", 30000);
        Book book3 = new Book(2, "목민심서", "정약용", 30000);

        System.out.println("동일성 비교(==) : " + (book2 == book3)); // ==은 주소값 비교. book2와 book3은 서로 다른 객체 참조값을 갖고 있으므로 false
        System.out.println("동등성 비교(equals) : " + (book2.equals(book3)));
    }
}
