package com.springbootreactdemo.springbootreactdemo.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name ="payment_details")
@Data
public class StudentPayment {
    @Id
    @GeneratedValue(generator = "custom-id")
    @GenericGenerator(name = "custom-id", strategy = "com.springbootreactdemo.springbootreactdemo.generator.CustomIdGenerator")
    private Long id;

    @Column(nullable = false)
    private String month;
    @Column(nullable = false)
    private String status;
    @Column(nullable = false)
    private String amount;

    @Column(nullable = false)
    private String date;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String billNo;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "student_id",referencedColumnName = "id",nullable = false)
    private Student studentDetails;

    public void setStudentDetails(Student student) {
        this.studentDetails = student;
    }





}
