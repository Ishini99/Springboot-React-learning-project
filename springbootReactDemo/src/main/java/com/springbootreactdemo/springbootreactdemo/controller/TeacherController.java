package com.springbootreactdemo.springbootreactdemo.controller;

import com.springbootreactdemo.springbootreactdemo.DTO.TeacherDTO;
import com.springbootreactdemo.springbootreactdemo.exception.StudentNotFoundException;
import com.springbootreactdemo.springbootreactdemo.exception.TeacherAlreadyExistsException;
import com.springbootreactdemo.springbootreactdemo.exception.TeacherNotFoundException;
import com.springbootreactdemo.springbootreactdemo.model.Student;
import com.springbootreactdemo.springbootreactdemo.model.Teacher;
import com.springbootreactdemo.springbootreactdemo.service.ITeacherService;
import jakarta.validation.Valid;
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
    @GetMapping("/teacher/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable Long id) {
        try {
            Teacher teacher = teacherService.getTeacherById(id);
            return new ResponseEntity<>(teacher, HttpStatus.OK);
        } catch (StudentNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTeacher(@PathVariable Long id) {
        try {
            teacherService.deleteTeacher(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (TeacherNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Teacher> updateTeacher(@Valid @RequestBody TeacherDTO teacherDTO, @PathVariable Long id) {
        try {
            Teacher updateTeacher = teacherService.updateTeacher(teacherDTO, id);
            return new ResponseEntity<>(updateTeacher, HttpStatus.OK);
        } catch (StudentNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
