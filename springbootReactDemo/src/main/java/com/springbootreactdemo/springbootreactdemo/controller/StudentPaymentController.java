package com.springbootreactdemo.springbootreactdemo.controller;

import com.springbootreactdemo.springbootreactdemo.DTO.PaymentDTO;
import com.springbootreactdemo.springbootreactdemo.model.StudentPayment;
import com.springbootreactdemo.springbootreactdemo.service.IStudentPaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("https://localhost:3000")
@RestController
@RequestMapping("payment")
@RequiredArgsConstructor

public class StudentPaymentController {
    private final IStudentPaymentService studentPaymentService;
    @PostMapping("/student/{id}")
    public ResponseEntity<String>addStudentPayment(@PathVariable Long id, @RequestBody PaymentDTO paymentDTO){
            studentPaymentService.addStudentPayment(id,paymentDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("Student Payment added successfully");
    }
    @GetMapping
    public ResponseEntity<List<StudentPayment>> getStudentPayment(){
return new ResponseEntity<>(studentPaymentService.getStudentPayment(),HttpStatus.OK);
    }
}
