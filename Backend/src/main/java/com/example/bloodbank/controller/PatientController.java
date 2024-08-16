package com.example.bloodbank.controller;

import com.example.bloodbank.model.Patient;
import com.example.bloodbank.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/add")
    public Patient addPatient(
            @RequestParam("name") String name,
            @RequestParam("age") Integer age,
            @RequestParam("address") String address,
            @RequestParam("phone") String phone,
            @RequestParam("bloodType") String bloodType,
            @RequestParam("location") String location,
            @RequestParam("medicalInfo") String medicalInfo,
            @RequestParam("additionalInfo") String additionalInfo,
            @RequestParam(value = "aadharFile", required = false) MultipartFile aadharFile,
            @RequestParam(value = "receiptFile", required = false) MultipartFile receiptFile
    ) throws IOException {

        Patient patient = new Patient();
        patient.setName(name);
        patient.setAge(age);
        patient.setAddress(address);
        patient.setPhone(phone);
        patient.setBloodType(bloodType);
        patient.setLocation(location);
        patient.setMedicalInfo(medicalInfo);
        patient.setAdditionalInfo(additionalInfo);
        if (aadharFile != null) {
            patient.setAadharFile(aadharFile.getBytes());
        }
        if (receiptFile != null) {
            patient.setReceiptFile(receiptFile.getBytes());
        }
        return patientService.savePatient(patient);
    }
}
