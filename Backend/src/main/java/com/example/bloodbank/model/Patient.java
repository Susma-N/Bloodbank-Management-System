package com.example.bloodbank.model;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "patients")
public class Patient implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer age;
    private String address;
    private String phone;
    private String bloodType;
    private String location;
    private String medicalInfo;
    private String additionalInfo;

    @Lob
    @Column(name = "aadhar_file")
    private byte[] aadharFile;

    @Lob
    @Column(name = "receipt_file")
    private byte[] receiptFile;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getMedicalInfo() {
        return medicalInfo;
    }

    public void setMedicalInfo(String medicalInfo) {
        this.medicalInfo = medicalInfo;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public byte[] getAadharFile() {
        return aadharFile;
    }

    public void setAadharFile(byte[] aadharFile) {
        this.aadharFile = aadharFile;
    }

    public byte[] getReceiptFile() {
        return receiptFile;
    }

    public void setReceiptFile(byte[] receiptFile) {
        this.receiptFile = receiptFile;
    }


}
