package com.springbootreactdemo.springbootreactdemo.controller;
import com.springbootreactdemo.springbootreactdemo.DTO.PaymentDTO;
import com.springbootreactdemo.springbootreactdemo.service.ITeacherPaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("https://localhost:3000")
@RestController
@RequestMapping("payment")
@RequiredArgsConstructor
public class TeacherPaymentController {
    private final ITeacherPaymentService teacherPaymentService;

    @PostMapping("/teacher/{id}")
    public ResponseEntity<String> addTeacherPayment(@PathVariable Long id, @RequestBody PaymentDTO paymentDTO){
        teacherPaymentService.addTeacherPayment(id,paymentDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Teacher Payment added successfully");

    }

}
