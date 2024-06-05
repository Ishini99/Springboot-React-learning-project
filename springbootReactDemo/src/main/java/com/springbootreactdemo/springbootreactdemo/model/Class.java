package com.springbootreactdemo.springbootreactdemo.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "class_details")
@Data
public class Class {
    @Id
    @GeneratedValue(generator = "custom-id")
    @GenericGenerator(name = "custom-id", strategy = "com.springbootreactdemo.springbootreactdemo.generator.CustomIdGenerator")
    private Long id;

    @Column(nullable = false)
    private String grade;
    @Column(nullable = false)
    private String subject;
    @Column(nullable = true)
    private  String section;
    @Column(nullable = false)
    private  String category;
    @Column(nullable = false)
    private String subjectCode;

    public void setSubject(String subject) {
        this.subject = subject != null ? subject.toUpperCase() : null;
        updateSubjectCode();
    }
    public void setSection(String section) {
        this.section = section != null ? section.toUpperCase() :null;
        updateSubjectCode();
    }


    public void setGrade(String grade) {
        this.grade = grade;
        updateSubjectCode();
    }
    public void setCategory(String category) {
        this.category = category;
        updateSubjectCode();
    }

    private void updateSubjectCode() {
        if (this.subject != null && this.grade != null && this.category != null) {
            this.subjectCode = this.category + "_" + this.section + "_" + this.subject+"-" + this.grade;
        }
    }
    }
