package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.DTO.PaymentDTO;
import com.springbootreactdemo.springbootreactdemo.model.StudentPayment;
//

import java.util.List;

public interface IStudentPaymentService {
    List<StudentPayment> getStudentPayment();
    StudentPayment getStudentPaymentById(Long id);

    StudentPayment addStudentPayment(Long id,PaymentDTO paymentDTO);
    void deleteStudentPayment (Long id);


    StudentPayment updateStudentPayment();

}
