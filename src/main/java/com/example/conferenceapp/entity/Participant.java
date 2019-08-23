package com.example.conferenceapp.entity;

import lombok.Data;

@Data
public class Participant {
    public Participant() {
    }

    public Participant(String name, String birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    private String name;
    private String birthday;
}
