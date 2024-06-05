package com.springbootreactdemo.springbootreactdemo.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "teacher_details")
@Data

public class Teacher {

    @Id
    @GeneratedValue(generator = "custom-id")
    @GenericGenerator(name = "custom-id", strategy = "com.springbootreactdemo.springbootreactdemo.generator.CustomIdGenerator")
    private Long id;

    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = true)
    private String address;
    @Column(nullable = false)
    private String mobileNo;
    @Column(nullable = false)
    private String nicNo;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "class_id", referencedColumnName = "id")
    private Class classDetails;

    public void setClassDetails(Class classDetails) {
        this.classDetails = classDetails;
    }



}
