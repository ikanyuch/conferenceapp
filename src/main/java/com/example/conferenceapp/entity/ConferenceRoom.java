package com.example.conferenceapp.entity;

import lombok.Data;

@Data
public class ConferenceRoom {
    public ConferenceRoom() {
    }

    public ConferenceRoom(String name, String location, Integer maxSeats) {
        this.name = name;
        this.location = location;
        this.maxSeats = maxSeats;
    }

    private String name;
    private String location;
    private Integer maxSeats;
}
