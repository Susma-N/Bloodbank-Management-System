package com.example.bloodbank.controller;

import com.example.bloodbank.model.BloodAvailability;
import com.example.bloodbank.service.BloodAvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BloodAvailabilityController {

    @Autowired
    private BloodAvailabilityService service;

    @GetMapping("/api/blood-availability/search")
    public List<BloodAvailability> search(
            @RequestParam String state,
            @RequestParam String district,
            @RequestParam String bloodGroup,
            @RequestParam boolean isGovernmentHospital,
            @RequestParam boolean isPrivateHospital) {
        return service.search(state, district, bloodGroup, isGovernmentHospital, isPrivateHospital);
    }
}
