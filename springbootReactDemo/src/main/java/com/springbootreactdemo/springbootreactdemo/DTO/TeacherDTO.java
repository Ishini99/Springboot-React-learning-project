package com.springbootreactdemo.springbootreactdemo.DTO;

import lombok.Data;

@Data
public class TeacherDTO {

    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private String mobileNo;
    private String nicNo;

    private String subject;
    private String grade;
    private String section;
    private String category;
}
