package com.example.backend.repository;

import com.example.backend.model.Register;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RegisterRepository extends MongoRepository<Register, String> {
    List<Register> findByEmailContaining(String email);
    List<Register> findByPhone(String phone);
}
