package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.DTO.PaymentDTO;
import com.springbootreactdemo.springbootreactdemo.model.TeacherPayment;

import java.util.List;

public interface ITeacherPaymentService {
    List<TeacherPayment> getTeacherPayment();
    TeacherPayment getTeacherPaymentById(Long id);
    TeacherPayment addTeacherPayment(Long id, PaymentDTO paymentDTO);
    void deleteTeacherPayment (Long id);


    TeacherPayment updateTeacherPayment();


}
