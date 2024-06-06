package com.springbootreactdemo.springbootreactdemo.controller;

import com.springbootreactdemo.springbootreactdemo.DTO.PaymentDTO;
//import com.springbootreactdemo.springbootreactdemo.model.StudentPayment;
import com.springbootreactdemo.springbootreactdemo.service.IStudentPaymentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("https://localhost:3000")
@RestController
@RequestMapping("payment/student")
@RequiredArgsConstructor

public class StudentPaymentController {
    private final IStudentPaymentService studentPaymentService;
    @PostMapping("/{id}")
    public ResponseEntity<String>addStudentPayment(@PathVariable Long id, @RequestBody PaymentDTO paymentDTO){
            studentPaymentService.addStudentPayment(id,paymentDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("Student Payment added successfully");

    }
}
