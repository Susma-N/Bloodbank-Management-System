package com.example.bloodbank.service;

import com.example.bloodbank.model.Donor;
import com.example.bloodbank.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DonorService {

    @Autowired
    private DonorRepository donorRepository;

    public Donor registerDonor(Donor donor) {
        return donorRepository.save(donor);
    }

    public Donor findByEmail(String email) {
        return donorRepository.findByEmail(email);
    }
}
