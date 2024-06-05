package com.springbootreactdemo.springbootreactdemo.controller;

import com.springbootreactdemo.springbootreactdemo.DTO.TeacherDTO;
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
    private final ITeacherService teacherService;

    @GetMapping
    public ResponseEntity<List<Teacher>> getTeachers() {
        return new ResponseEntity<>(teacherService.getTeachers(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addTeacher(@RequestBody TeacherDTO teacherDTO) {
        try {
            teacherService.addTeacher(teacherDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("Teacher added successfully");
        } catch (TeacherAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Teacher already exists");
        }
    }
}
