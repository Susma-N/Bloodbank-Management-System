package com.example.bloodbank.controller;

import com.example.bloodbank.model.Donor;
import com.example.bloodbank.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/donors")
@CrossOrigin(origins = "http://localhost:3000")
public class DonorController {

    @Autowired
    private DonorService donorService;

    @PostMapping("/register")
    public ResponseEntity<?> registerDonor(@RequestBody Donor donor) {
        try {
            Donor savedDonor = donorService.registerDonor(donor);
            return ResponseEntity.ok(savedDonor);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error during registration: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginDonor(@RequestBody Donor loginRequest) {
        try {
            Donor donor = donorService.findByEmail(loginRequest.getEmail());
            if (donor != null && donor.getPassword().equals(loginRequest.getPassword())) {
                return ResponseEntity.ok(donor);
            } else {
                return ResponseEntity.status(401).body("Invalid credentials");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error during login: " + e.getMessage());
        }
    }
}
