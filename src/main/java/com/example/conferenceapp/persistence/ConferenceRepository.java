package com.example.conferenceapp.persistence;

import com.example.conferenceapp.entity.Conference;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConferenceRepository extends MongoRepository<Conference,String> {
}
