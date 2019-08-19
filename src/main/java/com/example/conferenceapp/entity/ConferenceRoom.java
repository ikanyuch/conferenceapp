package com.example.conferenceapp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConferenceRoom {
    private String name;
    private String location;
    private Integer maxSeats;
}
