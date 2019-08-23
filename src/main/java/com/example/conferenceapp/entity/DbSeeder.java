package com.example.conferenceapp.entity;

import com.example.conferenceapp.persistence.ConferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DbSeeder implements CommandLineRunner{

    @Autowired
    private ConferenceRepository conferenceRepository;

    @Override
    public void run(String... args) throws Exception {
        Conference science = new Conference(
                "Science Conference",
                130,
                new ConferenceRoom("M/S Baltic Queen Conference","M/S Baltic Queen",124),
                Arrays.asList(
                        new Participant("Kristofer","Testing Date"),
                        new Participant("Kristofer","Testing Date"),
                        new Participant("Kristofer","Testing Date")
                ));
        this.conferenceRepository.deleteAll();
        List<Conference> conferences = Arrays.asList(science);
        this.conferenceRepository.saveAll(conferences);
    }
}