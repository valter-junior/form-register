package com.example.backend.controller;

import com.example.backend.model.Register;
import com.example.backend.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/")

public class registerController {

    @Autowired
    private RegisterRepository registerRepository;

    @PostMapping(value="/register", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Register> createTutorial(@RequestBody Register register) {

        try {
            Register _register = registerRepository.save(new Register(register.getName(), register.getEmail(), register.getPhone()));
            return new ResponseEntity<>(_register, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}