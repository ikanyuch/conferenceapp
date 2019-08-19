package com.example.conferenceapp.web;

import com.example.conferenceapp.entity.Conference;
import com.example.conferenceapp.persistence.ConferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class MainController {
    @Autowired
    private ConferenceRepository conferenceRepository;

    @GetMapping("/conferences")
    public List<Conference> getAll(){
        List<Conference> conferences = this.conferenceRepository.findAll();
        return conferences;
    }

    @GetMapping("/conferences/{id}")
    public ResponseEntity<Conference> getConference(@PathVariable("id") String id){
        Optional<Conference> confData = conferenceRepository.findById(id);
        if (confData.isPresent()){
            return new ResponseEntity<>(confData.get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/conferences/create")
    public Conference createConference(@Valid @RequestBody Conference conference){
        return conferenceRepository.save(conference);
    }

    @PutMapping("/conferences/{id}")
    public ResponseEntity<Conference> updateConference(@PathVariable("id") String id, @RequestBody Conference conference){
        Optional<Conference> confData = conferenceRepository.findById(id);
        if(confData.isPresent()){
            Conference savedConf = confData.get();
            savedConf.setName(conference.getName());
            savedConf.setConferenceRoom(conference.getConferenceRoom());
            savedConf.setDatetime(conference.getDatetime());
            savedConf.setParticipants(conference.getParticipants());

            Conference updateConf = conferenceRepository.save(savedConf);
            return new ResponseEntity<>(updateConf,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/conferences/{id}")
    public ResponseEntity<String> deleteConference(@PathVariable("id")String id){
        try{
            conferenceRepository.deleteById(id);
        }catch (Exception e){
            return new ResponseEntity<>("Failed to delete",HttpStatus.EXPECTATION_FAILED);
        }
        return new ResponseEntity<>("Conference was deleted",HttpStatus.OK);
    }

}
