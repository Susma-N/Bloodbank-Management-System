package com.example.bloodbank.repository;

import com.example.bloodbank.model.Nearest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NearestRepository extends JpaRepository<Nearest, Long> {
    List<Nearest> findByStateAndDistrict(String state, String district);
}