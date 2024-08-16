package com.example.bloodbank.service;

import com.example.bloodbank.model.Nearest;
import com.example.bloodbank.repository.NearestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NearestService {
    @Autowired
    private NearestRepository repository;

    public List<Nearest> findByStateAndDistrict(String state, String district) {
        return repository.findByStateAndDistrict(state, district);
    }
}
