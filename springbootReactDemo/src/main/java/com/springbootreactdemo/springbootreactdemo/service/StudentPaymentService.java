package com.springbootreactdemo.springbootreactdemo.service;

import com.springbootreactdemo.springbootreactdemo.DTO.PaymentDTO;
import com.springbootreactdemo.springbootreactdemo.exception.StudentNotFoundException;
import com.springbootreactdemo.springbootreactdemo.model.Student;
import com.springbootreactdemo.springbootreactdemo.model.StudentPayment;
import com.springbootreactdemo.springbootreactdemo.repository.StudentPaymentRepository;
import com.springbootreactdemo.springbootreactdemo.repository.StudentRepository; // Import this
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class StudentPaymentService implements IStudentPaymentService {
    private final StudentPaymentRepository studentPaymentRepository;
    private final StudentRepository studentRepository; // Add this
    private static final Logger logger = Logger.getLogger(StudentPaymentService.class.getName());

    @Override
    public List<StudentPayment> getStudentPayment() {
        return studentPaymentRepository.findAll();
    }

    @Override
    public StudentPayment getStudentPaymentById(Long id) {
        return null;
    }

    @Override
    public StudentPayment addStudentPayment(Long id, PaymentDTO paymentDTO) {
        StudentPayment studentPayment = new StudentPayment();
        studentPayment.setMonth(paymentDTO.getMonth());
        studentPayment.setAmount(paymentDTO.getAmount());
        studentPayment.setDate(paymentDTO.getDate());
        studentPayment.setStatus(paymentDTO.getStatus());
        studentPayment.setDescription(paymentDTO.getDescription());
        studentPayment.setBillNo(paymentDTO.getBillNo());

        // Fetch and set Student
        Student student = studentRepository.findById(paymentDTO.getStudentId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid student ID: " + paymentDTO.getStudentId()));
        studentPayment.setStudentDetails(student); // This method should exist in StudentPayment

        logger.info("Adding Student Payment: ");
        return studentPaymentRepository.save(studentPayment);
    }

    @Override
    public void deleteStudentPayment(Long id) {
        if (!studentPaymentRepository.existsById(id)) {
            throw new StudentNotFoundException("Student not found with ID: " + id);
        }
        logger.info("Deleting student with ID: " + id);
        studentRepository.deleteById(id);

    }

    @Override
    public StudentPayment updateStudentPayment() {
        return null;
    }
}
