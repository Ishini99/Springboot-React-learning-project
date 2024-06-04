package com.springbootreactdemo.springbootreactdemo.controller;

import com.springbootreactdemo.springbootreactdemo.exception.TeacherAlreadyExistsException;
import com.springbootreactdemo.springbootreactdemo.model.Teacher;
import com.springbootreactdemo.springbootreactdemo.service.ITeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/teachers")
@RequiredArgsConstructor
@Validated
public class TeacherController {
    public final ITeacherService teacherService;
    @GetMapping
    public ResponseEntity<List<Teacher>> getTeachers(){
        return new ResponseEntity<>(teacherService.getTeachers(), HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<String> addTeacher(@RequestBody Teacher teacher) {

        try {
            Teacher createdStudent = teacherService.addTeacher(teacher);
            return ResponseEntity.status(HttpStatus.CREATED).body("Teacher added successfully");
        } catch (TeacherAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Teacher already exists");
        }
    }
}
