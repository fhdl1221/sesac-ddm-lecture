package com.hw.ticket;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class TicketService {

    private List<MovieTicket> tickets;

    public TicketService() {
        tickets = new ArrayList<>();

        tickets.add(new MovieTicket("Avatar", "SF", 162, 15000, 12, true));
        tickets.add(new MovieTicket("Avatar: The Way of Water", "SF", 192, 16000, 12, false));
        tickets.add(new MovieTicket("Avengers: Endgame", "Action", 181, 16000, 12, true));
        tickets.add(new MovieTicket("Avengers: Infinity War", "Action", 149, 15000, 12, false));
        tickets.add(new MovieTicket("Top Gun: Maverick", "Action", 130, 14000, 12, true));
        tickets.add(new MovieTicket("Deadpool & Wolverine", "Action", 128, 17000, 19, true));
        tickets.add(new MovieTicket("Inside Out 2", "Animation", 96, 12000, 0, true));
        tickets.add(new MovieTicket("Frozen II", "Animation", 103, 11000, 0, false));
    }

    public List<MovieTicket> findAll() {
        return tickets.stream()
                .collect(Collectors.toList());
    }

    public List<String> findLongActionTitles() {
        return tickets.stream()
                .filter(t -> t.getGenre().equals("Action"))
                .filter(t -> t.getRunningTime() >= 130)
                .map(MovieTicket::getTitle)
                .collect(Collectors.toList());
    }

    public List<MovieTicket> findReservedTicketsSorted() {
        return tickets.stream()
                .filter(MovieTicket::isReserved)
                .sorted(Comparator.comparingInt(MovieTicket::getPrice))
                .collect(Collectors.toList());
    }

    public List<String> findGenres() {
        return tickets.stream()
                .map(MovieTicket::getGenre)
                .distinct()
                .collect(Collectors.toList());
    }

    public long countAdultMovies() {
        return tickets.stream()
                .filter(t -> t.getAgeLimit() >= 19)
                .count();
    }

    public boolean hasMovie(String title) {
        return tickets.stream()
                .anyMatch(t -> t.getTitle().equals(title));
    }

    public int getTotalReservedPrice() {
        return tickets.stream()
                .filter(MovieTicket::isReserved)
                .mapToInt(MovieTicket::getPrice).sum();
    }

    public Map<String, List<MovieTicket>> groupByGenre() {
        return tickets.stream()
                .collect(Collectors.groupingBy(MovieTicket::getGenre));
    }
}
