package com.springbootreactdemo.springbootreactdemo.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name ="payment_details")
@Data
public class TeacherPayment {
    @Id
    @GeneratedValue(generator = "custom-id")
    @GenericGenerator(name = "custom-id", strategy = "com.springbootreactdemo.springbootreactdemo.generator.CustomIdGenerator")
    private Long id;

    @Column(nullable = false)
    private String month;
    @Column(nullable = false)
    private String amount;

    @Column(nullable = false)
    private String date;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String billNo;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "teacher_id",referencedColumnName = "id",nullable = false)
    private Teacher teacherDetails;

    public void setTeacherDetails(Teacher teacher) {
        this.teacherDetails = teacher;
    }

}
