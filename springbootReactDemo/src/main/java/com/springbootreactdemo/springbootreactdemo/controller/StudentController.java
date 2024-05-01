package com.springbootreactdemo.springbootreactdemo.controller;

import com.springbootreactdemo.springbootreactdemo.model.Student;
import com.springbootreactdemo.springbootreactdemo.service.IStudentService;
import com.springbootreactdemo.springbootreactdemo.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
import java.util.List;

@RestController
@RequestMapping("students")
@RequiredArgsConstructor
public class StudentController {
    private  final IStudentService studentService;
    public ResponseEntity<List<Student>>getStudent(){
        return new ResponseEntity<>(studentService.getStudents(), HttpStatus.FOUND);    }
    @PostMapping
    public Student addStudent(@RequestBody Student student){
        return studentService.addStudent(student);
    }
    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, Long id){
        return studentService.updateStudent(student,id);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteStudents(@PathVariable Long id){
        studentService.deleteStudent(id);
    }
    @GetMapping("/*student/id")
    public  Student getStudentById(@PathVariable Long id) {
    return  studentService.getStudentById(id);
    }
}






















