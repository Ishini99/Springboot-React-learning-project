package com.springbootreactdemo.springbootreactdemo.controller;

import com.springbootreactdemo.springbootreactdemo.DTO.PaymentDTO;
import com.springbootreactdemo.springbootreactdemo.exception.StudentAlreadyExistsException;
import com.springbootreactdemo.springbootreactdemo.model.StudentPayment;
import com.springbootreactdemo.springbootreactdemo.service.IStudentPaymentService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//import static com.springbootreactdemo.springbootreactdemo.service.StudentService.logger;

@CrossOrigin("https://localhost:3000")
@RestController
@RequestMapping("payment")
@RequiredArgsConstructor

public class StudentPaymentController {
    private static final Logger logger = LoggerFactory.getLogger(StudentPaymentController.class);

    private final IStudentPaymentService studentPaymentService;
    @GetMapping("student")
    public ResponseEntity<List<StudentPayment>> getStudentPayment(){
        return new ResponseEntity<>(studentPaymentService.getStudentPayment(),HttpStatus.OK);
    }
    @PostMapping("/student/{id}")
    public ResponseEntity<String>addStudentPayment(@PathVariable Long id, @RequestBody PaymentDTO paymentDTO){
            studentPaymentService.addStudentPayment(id,paymentDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("Student Payment added successfully");
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long id) {
        studentPaymentService.deleteStudentPayment(id);
        logger.info("Deleted payment with ID: {}", id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




}
