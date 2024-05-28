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


@CrossOrigin("http://localhost:3000") //allowing client application to consume the backed
@RestController
@RequestMapping("/students")
@RequiredArgsConstructor

public class StudentController {
    private final IStudentService studentService;
    @GetMapping
    public ResponseEntity<List<Student>> getStudents(){
        return new ResponseEntity<>(studentService.getStudents(), HttpStatus.FOUND);
    }
    @PostMapping
    public Student addStudent(@RequestBody Student student)
    {
        return studentService.addStudent(student);
    }
    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable Long id){
        return studentService.updateStudent(student, id);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable Long id){
        studentService.deleteStudent(id);
    }
    @GetMapping("/student/{id}")
    public Student getStudentById(@PathVariable Long id){
        return studentService.getStudentById(id);
    }


}


//
//
//        ### Controller Class
//
//        ```java
//@RestController
//@RequestMapping("students")
//@RequiredArgsConstructor
//public class StudentController {
//    private final IStudentService studentService;
//```
//
//        - **`@RestController`**: Indicates that this class defines a controller and its methods will handle incoming HTTP requests.
//            - **`@RequestMapping("students")`**: Maps HTTP requests to `/students` endpoint. All endpoint mappings within this class will start with `/students`.
//            - **`@RequiredArgsConstructor`**: Lombok annotation that generates a constructor with required arguments. In this case, it's used to inject `IStudentService` into the controller.
//
//            ### Constructor
//
//```java
//    private final IStudentService studentService;
//```
//
//        - **`IStudentService`**: Interface defining methods to interact with student data. It's injected into the controller using constructor-based dependency injection.
//
//            ### GET Mapping
//
//```java
//    @GetMapping
//    public ResponseEntity<List<Student>> getStudent() {
//        return new ResponseEntity<>(studentService.getStudents(), HttpStatus.FOUND);
//    }
//```
//
//        - **`@GetMapping`**: Maps HTTP GET requests to the method. When `/students` is accessed via a GET request, this method will be called.
//            - **`ResponseEntity<List<Student>>`**: ResponseEntity represents the entire HTTP response, including status code, headers, and body. It returns a list of students with HTTP status code `FOUND` (302).
//
//            ### POST Mapping
//
//```java
//    @PostMapping
//    public Student addStudent(@RequestBody Student student) {
//        return studentService.addStudent(student);
//    }
//```
//
//        - **`@PostMapping`**: Maps HTTP POST requests to the method. It's used to add a new student.
//            - **`@RequestBody`**: Indicates that the incoming request body should be bound to the `student` parameter.
//- **`Student`**: Represents the student object to be added.
//
//### PUT Mapping
//
//```java
//    @PutMapping("/update/{id}")
//    public Student updateStudent(@RequestBody Student student, @PathVariable Long id) {
//        return studentService.updateStudent(student, id);
//    }
//```
//
//        - **`@PutMapping`**: Maps HTTP PUT requests to the method. It's used to update an existing student record identified by the `id`.
//            - **`@PathVariable`**: Extracts the `id` from the URL path.
//            - **`@RequestBody`**: Binds the incoming request body to the `student` parameter.
//
//### DELETE Mapping
//
//```java
//    @DeleteMapping("/delete/{id}")
//    public void deleteStudents(@PathVariable Long id) {
//        studentService.deleteStudent(id);
//    }
//```
//
//        - **`@DeleteMapping`**: Maps HTTP DELETE requests to the method. It's used to delete a student record identified by the `id`.
//            - **`@PathVariable`**: Extracts the `id` from the URL path.
//
//            ### Additional Notes:
//
//            - **Service Layer**: The controller delegates business logic to the `IStudentService` interface. It follows the principle of separation of concerns, where the controller handles HTTP requests and the service layer manages business logic.
//            - **HTTP Status Codes**: The controller returns appropriate HTTP status codes (e.g., `FOUND`, `OK`, `NO_CONTENT`) to indicate the success or failure of the operation.
//            - **Exception Handling**: Error handling mechanisms, such as try-catch blocks or exception handlers, are not shown in this code snippet. However, it's essential to handle exceptions gracefully, especially when dealing with external dependencies like databases or network calls.
//
//    This controller provides basic CRUD operations for managing student data via HTTP requests. It adheres to RESTful principles and follows a typical structure found in Spring Boot applications.
//
//
//
















