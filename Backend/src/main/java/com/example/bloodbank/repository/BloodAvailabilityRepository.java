package com.example.bloodbank.repository;

import com.example.bloodbank.model.BloodAvailability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BloodAvailabilityRepository extends JpaRepository<BloodAvailability, Long> {
    List<BloodAvailability> findByStateAndDistrictAndBloodGroupAndTypeIn(String state, String district, String bloodGroup, List<String> types);
}
