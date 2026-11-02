package com.lecture.section02.set;

import com.lecture.section01.list.dto.BookDTO;

import java.util.Set;
import java.util.TreeSet;

public class Application3 {
    public static void main(String[] args) {

        /*
        * TreeSet
        * - 중복불가의 특징과 함께 요소를 저장할 때마다 비교 기준에 따라 요소를 정렬해서 보관
        * */

        /*
        * 요소가 Comparable을 구현해 기본 정렬 기준을 제공하거나,
        * TreeSet을 만들 때 별도의 Comparator를 전달해야 한다
        * */

        TreeSet<String> tset = new TreeSet<>();

        tset.add("java");
        tset.add("html");
        tset.add("mysql");
        tset.add("css");
        tset.add("java");

        System.out.println(tset);

        TreeSet<BookDTO> bookSet = new TreeSet<>();
        bookSet.add(new BookDTO(3, "목민심서", "정약용", 30000));
        bookSet.add(new BookDTO(1, "홍길동전", "허균", 50000));
        bookSet.add(new BookDTO(4, "동의보감", "허준", 40000));
        bookSet.add(new BookDTO(2, "다른 제목", "다른 저자", 10000));

        System.out.println("BookDTO TreeSet 결과 : ");
        for(BookDTO book: bookSet) {
            System.out.println(book);
        }

        /* TreeSet을 활용한 로또 번호 생성기 */
        Set<Integer> lotto = new TreeSet<>();

        while(lotto.size() < 6) {
            lotto.add((int)((Math.random() * 45)) + 1);
        }
    }
}
