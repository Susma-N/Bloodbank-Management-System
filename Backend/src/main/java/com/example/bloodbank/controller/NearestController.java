package com.example.bloodbank.controller;

import com.example.bloodbank.model.Nearest;
import com.example.bloodbank.service.NearestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NearestController {

    @Autowired
    private NearestService nearestService;

    @GetMapping("/api/blood-banks/search")
    public List<Nearest> searchBloodBanks(@RequestParam String state, @RequestParam String district) {
        return nearestService.findByStateAndDistrict(state, district);
    }
}
