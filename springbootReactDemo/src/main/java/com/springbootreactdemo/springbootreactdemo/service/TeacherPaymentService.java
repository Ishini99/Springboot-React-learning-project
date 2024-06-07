package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.DTO.PaymentDTO;
import com.springbootreactdemo.springbootreactdemo.model.Teacher;
import com.springbootreactdemo.springbootreactdemo.model.TeacherPayment;
import com.springbootreactdemo.springbootreactdemo.repository.TeacherPaymentRepository;
import com.springbootreactdemo.springbootreactdemo.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class TeacherPaymentService implements ITeacherPaymentService {
    private final TeacherPaymentRepository teacherPaymentRepository;
    private final TeacherRepository teacherRepository; // Add this
    private static final Logger logger = Logger.getLogger(TeacherPaymentService.class.getName());

    @Override
    public List<TeacherPayment> getTeacherPayment() {
        return teacherPaymentRepository.findAll();
    }

    @Override
    public TeacherPayment getTeacherPaymentById(Long id) {
        return null;
    }

    @Override
    public TeacherPayment addTeacherPayment(Long id, PaymentDTO paymentDTO) {
        TeacherPayment teacherPayment = new TeacherPayment();
        teacherPayment.setMonth(paymentDTO.getMonth());
        teacherPayment.setAmount(paymentDTO.getAmount());
        teacherPayment.setDate(paymentDTO.getDate());
        teacherPayment.setDescription(paymentDTO.getDescription());
        teacherPayment.setStatus(paymentDTO.getStatus());
        teacherPayment.setBillNo(paymentDTO.getBillNo());

        // Fetch and set Teacher
        Teacher teacher = teacherRepository.findById(paymentDTO.getTeacherId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid teacher ID: " + paymentDTO.getTeacherId()));
        teacherPayment.setTeacherDetails(teacher); // This method should exist in TeacherPayment

        logger.info("Adding Teacher Payment: ");
        return teacherPaymentRepository.save(teacherPayment);
    }

    @Override
    public void deleteTeacherPayment(Long id) {
    }

    @Override
    public TeacherPayment updateTeacherPayment() {
        return null;
    }
}
