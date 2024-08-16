package com.example.bloodbank.service;

import com.example.bloodbank.model.BloodAvailability;
import com.example.bloodbank.repository.BloodAvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodAvailabilityService {

    @Autowired
    private BloodAvailabilityRepository repository;

    public List<BloodAvailability> search(String state, String district, String bloodGroup, boolean isGovernmentHospital, boolean isPrivateHospital) {
        List<String> types = List.of();
        if (isGovernmentHospital && isPrivateHospital) {
            types = List.of("Government", "Private");
        } else if (isGovernmentHospital) {
            types = List.of("Government");
        } else if (isPrivateHospital) {
            types = List.of("Private");
        }

        return repository.findByStateAndDistrictAndBloodGroupAndTypeIn(state, district, bloodGroup, types);
    }
}
