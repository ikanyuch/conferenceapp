package com.example.conferenceapp.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Conferences")
public class Conference {
    @Id
    private String id;
    private String name;
    @Indexed(direction = IndexDirection.ASCENDING)
    private int datetime;
    private ConferenceRoom conferenceRoom;
    private List<Participant> participants;

    protected Conference(){
        this.participants = new ArrayList<>();
    }

    public Conference(String name, int datetime, ConferenceRoom conferenceRoom, List<Participant> participants) {
        this.name = name;
        this.datetime = datetime;
        this.conferenceRoom = conferenceRoom;
        this.participants = participants;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getDatetime() {
        return datetime;
    }

    public ConferenceRoom getConferenceRoom() {
        return conferenceRoom;
    }

    public List<Participant> getParticipants() {
        return participants;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDatetime(int datetime) {
        this.datetime = datetime;
    }

    public void setConferenceRoom(ConferenceRoom conferenceRoom) {
        this.conferenceRoom = conferenceRoom;
    }

    public void setParticipants(List<Participant> participants) {
        this.participants = participants;
    }
}
