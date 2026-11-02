package com.hw.run;

import com.hw.ticket.MovieTicket;
import com.hw.ticket.TicketService;

import java.util.List;
import java.util.Map;

public class Application {
    public static void main(String[] args) {
        TicketService ticketService = new TicketService();

        System.out.println("[130분 이상 Action 영화 제목]");
        ticketService.findLongActionTitles()
                .forEach(System.out::println);

        System.out.println("[예매 완료 티켓 가격 낮은 순]");
        ticketService.findReservedTicketsSorted()
                .forEach(ticket -> System.out.println(ticket.getTitle() + " / " + ticket.getPrice()));

        System.out.println("[장르 목록]");
        System.out.println(String.join(", ", ticketService.findGenres()));

        System.out.println("청소년 관람불가 영화 수: " + ticketService.countAdultMovies());

        System.out.println("Top Gun: Maverick 존재 여부: " + ticketService.hasMovie("Top Gun: Maverick"));

        System.out.println("예매 완료 총 결제 금액: " + ticketService.getTotalReservedPrice());

        System.out.println("[장르별 영화]");
        Map<String, List<MovieTicket>> grouped =
                ticketService.groupByGenre();

        grouped.forEach((genre, movies) -> {
            System.out.print(genre + ": ");

            movies.stream()
                    .map(MovieTicket::getTitle)
                    .forEach(title -> System.out.print(title + ", "));

            System.out.println();
        });
    }
}
