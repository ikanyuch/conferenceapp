package com.example.conferenceapp.entity;

import com.example.conferenceapp.persistence.ConferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DbSeeder implements CommandLineRunner {

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
                        new Participant("John","Other Testing Date"),
                        new Participant("Juliet","AndAnother Testing Date")
                ));
        Conference business = new Conference(
                "Business Meeting",
                131,
                new ConferenceRoom("M/S Baltic Queen Conference","M/S Baltic Queen",124),
                Arrays.asList(
                        new Participant("Ted","Testing Date"),
                        new Participant("Konstantin","Other Testing Date"),
                        new Participant("Maria","AndAnother Testing Date")
                ));
        Conference logistics = new Conference(
                "Logistic Planning Meeting",
                132,
                new ConferenceRoom("M/S Baltic Queen Conference","M/S Baltic Queen",124),
                Arrays.asList(
                        new Participant("Mr.Johnson","Testing Date"),
                        new Participant("Neo","Other Testing Date"),
                        new Participant("Trinity","AndAnother Testing Date")
                ));

        this.conferenceRepository.deleteAll();

        List<Conference> conferences = Arrays.asList(science,business,logistics);
        this.conferenceRepository.saveAll(conferences);
    }
}

